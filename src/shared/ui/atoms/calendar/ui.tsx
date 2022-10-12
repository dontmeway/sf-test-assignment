import Calendar, { CalendarProps } from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './style.css'

type Props = {
  date: Date
  onChange(date: Date): void
}

export const View: React.FC<Props & CalendarProps> = ({
  date,
  onChange,
  ...props
}) => {
  return (
    <Calendar
      tileClassName="customTile"
      value={date}
      onChange={onChange}
      className="calendar max-w-[580px] w-full h-max p-8 rounded-md shadow-md"
      {...props}
    />
  )
}
