import cn from 'classnames'

import * as lib from './lib'

export const TableWidget = () => {
  return (
    <div className="flex flex-col space-y-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold">Таблица для графика</h1>
      <Table />
    </div>
  )
}

const Table = () => {
  return (
    <table className="w-full p-5">
      <thead>
        <tr>
          <Th className="text-black text-left !font-medium">Список</Th>
          <Th>Янв</Th>
          <Th>Фев</Th>
          <Th>Мар</Th>
          <Th>Апр</Th>
          <Th>Май</Th>
          <Th>Июн</Th>
          <Th>Июл</Th>
          <Th>Авг</Th>
          <Th>Сен</Th>
          <Th>Окт</Th>
          <Th>Ноя</Th>
          <Th>Дек</Th>
        </tr>
      </thead>
      <tbody>
        {lib.data.map((row, parentIdx) => (
          <tr
            className={cn('odd:bg-pink-50', {
              'mb-4': parentIdx !== lib.data.length - 1,
            })}
            key={parentIdx + row.title}
          >
            {Object.values(row).map((str, idx) => (
              <Td className={cn({ '!text-left': idx === 0 })} key={str}>
                {str}
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type ThProps = {
  className?: string
  children: React.ReactNode
}

const Th = ({ children, className = '' }: ThProps) => (
  <th className={cn('text-[#5E5E5E] text-sm font-normal py-4 px-2', className)}>
    {children}
  </th>
)

type TdProps = {
  className?: string
  children: React.ReactNode
}

const Td = ({ children, className = '' }: TdProps) => (
  <td
    className={cn(
      'text-black text-center text-sm font-normal py-4 px-2',
      className
    )}
  >
    {children}
  </td>
)
