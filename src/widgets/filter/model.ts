import {
  combine,
  createApi,
  createEvent,
  createStore,
  Event,
  sample,
} from 'effector'
import dayjs from 'dayjs'

import * as lib from './lib'
import { spread } from 'patronum'

export type FilterType = keyof Omit<lib.Data, 'id'>
type Nullable<T> = T | null
type CountableFilter = { count: number; lessOrMore: 'less' | 'more' }
export type Filters = {
  title: Nullable<string>
  auditory: Nullable<lib.Auditory[]>
  comments: Nullable<CountableFilter>
  views: Nullable<CountableFilter>
  date: Nullable<{ from?: string; to?: string }>
}

export const $isOpen = createStore(false)

export const filterRemoved = createEvent<FilterType>()
export const applyButtonClicked = createEvent()
export const childFiltersClosed = createEvent()
export const filterTypeChanged = createEvent<FilterType>()
export const { filterClosed, filterOpened } = createApi($isOpen, {
  filterOpened: () => true,
  filterClosed: () => false,
})

export const titleField = createField<string>()
export const auditoryField = createField<lib.Auditory[]>()
export const dateField = createField<NonNullable<Filters['date']>>()
export const viewsField = createField<CountableFilter>()
export const commentsField = createField<CountableFilter>()

export const $filterType = createStore<null | FilterType>(null)
export const $filters = createStore<Filters>({
  auditory: null,
  comments: null,
  date: null,
  title: null,
  views: null,
})

export const $notSelectedFilters = $filters.map((filters) =>
  Object.entries(filters)
    .filter(([, value]) => value === null)
    .map(([key]) => key)
)

const $data = createStore(Object.fromEntries(lib.data.map((d) => [d.id, d])))

const $filteredData = combine($data, $filters, (data, filters) => {
  let filtered = Object.values(data)

  if (filters) {
    if (!!filters.title) {
      filtered = filtered.filter(({ title }) =>
        title.toLowerCase().includes(filters.title?.toLowerCase() ?? '')
      )
    }
    if ((filters.auditory?.length ?? 0) > 0) {
      filtered = filtered.filter(({ auditory }) =>
        (filters.auditory ?? []).includes(auditory)
      )
    }
    if (filters.date && (filters.date.from || filters.date.to)) {
      if (!!filters.date.from) {
        filtered = filtered.filter(({ date }) =>
          dayjs(date).isSameOrAfter(filters.date?.from)
        )
      }
      if (!!filters.date.to) {
        filtered = filtered.filter(({ date }) =>
          dayjs(date).isSameOrBefore(filters.date?.to)
        )
      }
    }
    if (filters.comments) {
      filtered = filtered.filter(({ comments }) =>
        filters.comments?.lessOrMore === 'less'
          ? comments <= filters.comments.count
          : comments >= (filters.comments?.count ?? 0)
      )
    }
    if (filters.views) {
      filtered = filtered.filter(({ views }) =>
        filters.views?.lessOrMore === 'less'
          ? views <= filters.views.count
          : views >= (filters.views?.count ?? 0)
      )
    }
  }

  return filtered
})

export const $normalizedData = $filteredData.map((data) =>
  data.map((d) => ({
    ...d,
    auditory: lib.auditories[d.auditory],
    date: dayjs(d.date).format('DD.MM.YYYY'),
  }))
)

export const $activeFilters = $filters.map((filters) => {
  const active = Object.entries(filters).filter(([, value]) => value !== null)

  return active
})

$filterType
  .on(filterTypeChanged, (_, filterType) => filterType)
  .reset([filterOpened, childFiltersClosed])

function createField<T>(reset = createEvent()) {
  const $store = createStore<T | null>(null)
  const changed = createEvent<T>()

  $store.on(changed, (_, newValue) => newValue).reset([reset])

  return {
    $store,
    changed,
  }
}

sample({
  clock: applyButtonClicked,
  source: {
    title: titleField.$store,
    auditory: auditoryField.$store,
    date: dateField.$store,
    views: viewsField.$store,
    comments: commentsField.$store,
    filters: $filters,
  },
  fn: ({ filters, ...next }) => ({ ...filters, ...next }),
  target: $filters,
})

sample({
  clock: filterRemoved,
  source: $filters,
  fn: (filters, key) => ({ ...filters, [key]: null }),
  target: $filters,
})

spread({
  source: $filters,
  targets: {
    title: titleField.$store,
    auditory: auditoryField.$store,
    date: dateField.$store,
    views: viewsField.$store,
    comments: commentsField.$store,
  },
})

sample({
  clock: applyButtonClicked,
  target: filterClosed,
})
