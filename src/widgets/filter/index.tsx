import { useList, useStoreMap, useUnit } from 'effector-react'
import { useTable, useSortBy } from 'react-table'
import { HiOutlineFilter } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { Popover } from 'react-tiny-popover'

import * as lib from './lib'
import * as model from './model'
import { Input } from '@/shared/ui'
import { useCallback, useEffect, useState } from 'react'

export const FilterWidget = () => {
  return (
    <div className="flex flex-col space-y-2 rounded-md shadow-md w-full bg-white p-5">
      <Filter />
      <Table />
    </div>
  )
}

const Filter = () => {
  return (
    <div className="flex w-full space-x-2 rounded border border-brand-secondary px-2.5 py-1.5">
      <Popper>
        <ActiveFilters />
      </Popper>
    </div>
  )
}

const Table = () => {
  const data = useUnit(model.$normalizedData)
  const tableInstance = useTable({ columns: lib.columns, data }, useSortBy)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <table className="w-full" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                className="text-sm text-gray-400 text-left font-normal py-5"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <span>
                  {' '}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}{' '}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr
              className="border-y-[0.5px] border-y-brand-secondary"
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    className="py-7 text-sm text-brand-black"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Popper = (props: { children?: React.ReactNode }) => {
  const isOpen = useUnit(model.$isOpen)

  return (
    <>
      <button
        type="button"
        onClick={() => model.filterOpened()}
        className="p-1 rounded hover:bg-pink-50 transition-colors"
      >
        <HiOutlineFilter className="w-6 h-6 text-brand-secondary" />
      </button>
      {props.children}
      <Popover
        isOpen={isOpen}
        positions={['bottom', 'top', 'left', 'right']}
        content={<Filters />}
        onClickOutside={() => model.filterClosed()}
      >
        <input
          onClick={() => model.filterOpened()}
          className="focus:outline-none focus-visible:outline-none"
        />
      </Popover>
    </>
  )
}

const Filters = () => {
  const filterType = useUnit(model.$filterType)
  return (
    <div className="px-5 py-2.5 rounded bg-[#FBF6F6] w-80">
      {filterType === null ? <RootFilters /> : <ChildFilters />}
    </div>
  )
}

const rootFilterLocales: Record<string, string> = {
  auditory: 'Аудитория',
  title: 'Название',
  date: 'Дата',
  comments: 'Комментарии',
  views: 'Просмотры',
}

const RootFilters = () => {
  return (
    <>
      {useList(model.$notSelectedFilters, (filter) => (
        <FilterButton
          onClick={() => model.filterTypeChanged(filter as model.FilterType)}
        >
          {rootFilterLocales[filter]}
        </FilterButton>
      ))}
    </>
  )
}

const ChildFilters = () => {
  const filterType = useUnit(model.$filterType) ?? ''

  return (
    <div>
      <div className="flex justify-between w-full items-center pb-2 border-b-brand-secondary border-b-2">
        <h4 className="text-xl font-medium text-brand-secondary">
          {rootFilterLocales[filterType]}
        </h4>
        <button
          onClick={() => model.childFiltersClosed()}
          type="button"
          className="p-1 rounded hover:bg-pink-50 transition-colors"
        >
          <GrClose className="border-brand-secondary w-6 h-6" />
        </button>
      </div>
      <div className="py-3">
        {filterType === 'title' && <TitleFilter />}
        {filterType === 'auditory' && <AuditoryFilter />}
        {filterType === 'date' && <DateFilter />}
        {filterType === 'views' && <ViewsFilter />}
        {filterType === 'comments' && <CommentsFilter />}
      </div>
      <div className="py-2 border-t-2 border-t-brand-secondary flex justify-end">
        <button
          onClick={() => model.applyButtonClicked()}
          className="w-max text-center py-1.5 px-2.5 rounded bg-pink-200 hover:bg-pink-100 transition-colors text-sm font-medium text-brand-secondary"
        >
          Применить
        </button>
      </div>
    </div>
  )
}

const TitleFilter = () => {
  const value = useUnit(model.titleField.$store)
  return (
    <Input
      placeholder="Введите название"
      className="w-full"
      onChange={(e) => model.titleField.changed(e.currentTarget.value)}
      value={value ?? ''}
    />
  )
}

const AuditoryFilter = () => {
  const selected = useUnit(model.auditoryField.$store) ?? []

  const onChange = useCallback(
    (key: lib.Auditory) => {
      if (selected.includes(key)) {
        model.auditoryField.changed(selected.filter((s) => s !== key))
      } else {
        model.auditoryField.changed(selected.concat(key))
      }
    },
    [selected]
  )

  return (
    <div className="flex flex-col space-y-1.5">
      {Object.entries(lib.auditories).map(([key, value]) => (
        <label key={key} className="flex items-center space-x-1.5">
          <input
            checked={selected.includes(key as lib.Auditory)}
            type="checkbox"
            onChange={() => onChange(key as lib.Auditory)}
          />
          <span>{value}</span>
        </label>
      ))}
    </div>
  )
}

const DateFilter = () => {
  const selected = useUnit(model.dateField.$store) ?? {}

  const onFromChange = (date: string) => {
    model.dateField.changed({ ...selected, from: date })
  }

  const onToChange = (date: string) => {
    model.dateField.changed({ ...selected, to: date })
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col space-y-1">
        <span>С</span>
        <Input
          value={selected?.from ?? ''}
          max={selected?.to}
          type="date"
          onChange={(e) => onFromChange(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <span>По</span>
        <Input
          value={selected?.to ?? ''}
          min={selected?.from}
          onChange={(e) => onToChange(e.currentTarget.value)}
          type="date"
        />
      </div>
    </div>
  )
}

const ViewsFilter = () => {
  const field = useUnit(model.viewsField.$store)
  return (
    <CountableFilter
      count={field?.count ?? null}
      lessOrMore={field?.lessOrMore ?? 'less'}
      onChange={(changed) => model.viewsField.changed(changed)}
    />
  )
}

const CommentsFilter = () => {
  const field = useUnit(model.commentsField.$store)
  return (
    <CountableFilter
      count={field?.count ?? null}
      lessOrMore={field?.lessOrMore ?? 'less'}
      onChange={(changed) => model.commentsField.changed(changed)}
    />
  )
}

type CountableFilter = {
  lessOrMore: 'less' | 'more'
  count: number | null
  onChange: (arg: { count: number; lessOrMore: 'less' | 'more' }) => void
}

const CountableFilter = ({ onChange, ...props }: CountableFilter) => {
  return (
    <div className="flex items-center space-x-1.5">
      <select
        value={props.lessOrMore}
        onChange={(e) =>
          onChange({
            count: props.count ?? 0,
            lessOrMore: e.currentTarget.value as 'less' | 'more',
          })
        }
      >
        <option value="less">{'<='}</option>
        <option value="more">{'>='}</option>
      </select>
      <input
        type="number"
        value={props.count?.toString() ?? ''}
        onChange={({ currentTarget: { value } }) => {
          onChange({
            lessOrMore: props.lessOrMore,
            count: +value,
          })
        }}
      />
    </div>
  )
}

type ActiveFilterProps = {
  filter: model.FilterType
  value: model.Filters[model.FilterType]
}

const ActiveFilters = () => {
  return (
    <div className="w-max flex items-center gap-2 flex-wrap">
      {useList(model.$activeFilters, ([filter, value]) => (
        <ActiveFilter filter={filter as model.FilterType} value={value} />
      ))}
    </div>
  )
}

const ActiveFilter = (props: ActiveFilterProps) => {
  return (
    <div className="flex space-x-2 rounded-3xl bg-pink-200 hover:bg-pink-100 transition-colors px-2.5 py-1.5 max-w-xs">
      <p className="truncate">
        {rootFilterLocales[props.filter]}: {normalizeFilterValue(props.value)}
      </p>
      <button
        onClick={() => model.filterRemoved(props.filter)}
        type="button"
        className="p-1 rounded hover:bg-pink-50 transition-colors"
      >
        <GrClose className="border-brand-secondary w-3 h-3" />
      </button>
    </div>
  )
}

type FilterButtonProps = {
  children: React.ReactNode
  onClick?(): void
}

const FilterButton = (props: FilterButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2.5 text-left text-base text-gray-500 hover:text-brand-secondary transition-colors"
    >
      {props.children}
    </button>
  )
}

function normalizeFilterValue(value: ActiveFilterProps['value']) {
  if (value === null) return ''
  if (typeof value === 'string' || typeof value === 'number') return value

  if (Array.isArray(value)) return value.join(', ')

  if ('lessOrMore' in value) {
    return `${value.lessOrMore === 'more' ? '>=' : '<='} - ${value.count}`
  }

  return `${value.from ?? 'не выбрано'} - ${value.to ?? 'не выбрано'}`
}
