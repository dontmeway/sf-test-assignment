import { Calendar } from '@/shared/ui'
import { useState } from 'react'

export const CalendarWidget = () => {
  const [date, setDate] = useState(new Date())
  return <Calendar date={date} onChange={(date: Date) => setDate(date)} />
}
