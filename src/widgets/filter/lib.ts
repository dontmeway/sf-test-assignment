import { Column } from 'react-table'

export type Auditory =
  | 'for_kids_by_you'
  | 'for_kids_by_youtube'
  | 'for_adult'
  | 'unmarked'

export const auditories: Record<Auditory, string> = {
  for_adult: 'Не для детей',
  for_kids_by_you: 'Для детей (указано вами)',
  for_kids_by_youtube: 'Для детей (определено YouTube)',
  unmarked: 'Без отметки',
}

export type Data = {
  title: string
  auditory: Auditory
  date: string
  views: number
  comments: number
  id: string
}

export const columns: Column<Omit<Data, 'auditory'> & { auditory: string }>[] =
  [
    {
      Header: 'Название',
      accessor: 'title',
    },
    {
      Header: 'Аудитория',
      accessor: 'auditory',
    },
    {
      Header: 'Дата',
      accessor: 'date',
    },
    {
      Header: 'Просмотры',
      accessor: 'views',
    },
    {
      Header: 'Комментарии',
      accessor: 'comments',
    },
  ]

export const data: Data[] = [
  {
    id: '9',
    title: 'matrix modern Chevrolet',
    auditory: 'for_kids_by_youtube',
    date: '2022-04-30T14:57:26.578Z',
    views: 824,
    comments: 63,
  },
  {
    id: '1',
    title: 'канал',
    auditory: 'unmarked',
    date: '2022-12-29T08:01:19.171Z',
    views: 212,
    comments: 8814,
  },
  {
    id: '4',
    title: 'Ватикан',
    auditory: 'for_kids_by_you',
    date: '2022-03-24T07:09:47.874Z',
    views: 192,
    comments: 89,
  },
  {
    id: '3',
    title: 'механизм hmph upon',
    auditory: 'for_adult',
    date: '2022-12-21T10:20:35.240Z',
    views: 676725,
    comments: 6876,
  },
  {
    id: '8',
    title: 'tempo',
    auditory: 'for_kids_by_youtube',
    date: '2022-01-24T12:00:09.631Z',
    views: 788,
    comments: 900,
  },
  {
    id: '88',
    title: 'твердотельный операционный',
    auditory: 'for_adult',
    date: '2022-05-09T10:59:56.123Z',
    views: 136060,
    comments: 47,
  },
  {
    id: '5',
    title: 'leverage промышленное that',
    auditory: 'for_kids_by_you',
    date: '2022-02-28T19:54:29.037Z',
    views: 31691,
    comments: 3924,
  },
  {
    id: '99',
    title: 'микрочип',
    auditory: 'for_adult',
    date: '2022-04-25T14:16:46.258Z',
    views: 12060,
    comments: 9488,
  },
  {
    id: '32',
    title: 'East',
    auditory: 'for_kids_by_you',
    date: '2022-10-04T07:52:00.268Z',
    views: 9002,
    comments: 718,
  },
  {
    id: '15',
    title: 'Northwest Northwest invoice',
    auditory: 'for_kids_by_youtube',
    date: '2022-03-19T12:48:13.270Z',
    views: 5753,
    comments: 37,
  },
  {
    id: '6',
    title: 'область PNG Меховой',
    auditory: 'for_kids_by_you',
    date: '2022-07-16T15:10:43.712Z',
    views: 15873,
    comments: 5283,
  },
  {
    id: '5',
    title: 'Натуральный',
    auditory: 'for_kids_by_youtube',
    date: '2022-08-09T10:33:59.032Z',
    views: 546264,
    comments: 4071,
  },
  {
    id: '7',
    title: 'generation stud дизайнер',
    auditory: 'for_adult',
    date: '2022-08-03T04:28:58.208Z',
    views: 408,
    comments: 25,
  },
  {
    id: '95',
    title: 'Northwest',
    auditory: 'for_kids_by_youtube',
    date: '2022-02-17T17:15:33.399Z',
    views: 545,
    comments: 837,
  },
  {
    id: '81',
    title: 'Нигер координатор',
    auditory: 'for_kids_by_you',
    date: '2022-12-28T01:23:31.208Z',
    views: 82993,
    comments: 4621,
  },
  {
    id: '94',
    title: 'World индексирование second',
    auditory: 'for_adult',
    date: '2022-11-02T10:34:19.339Z',
    views: 49287,
    comments: 984,
  },
  {
    id: '53',
    title: 'красота коммуникационный',
    auditory: 'unmarked',
    date: '2022-06-02T21:06:17.459Z',
    views: 490,
    comments: 77,
  },
  {
    id: '25',
    title: 'mole Hybrid здоровье',
    auditory: 'for_kids_by_youtube',
    date: '2022-03-14T10:50:24.646Z',
    views: 7321,
    comments: 30,
  },
  {
    id: '50',
    title: 'Бузулук порядка',
    auditory: 'unmarked',
    date: '2022-03-11T01:08:14.866Z',
    views: 663537,
    comments: 61,
  },
  {
    id: '999',
    title: 'policy Bedfordshire male',
    auditory: 'for_adult',
    date: '2022-02-25T09:44:14.658Z',
    views: 5417,
    comments: 3109,
  },
]
