import { TableWidget } from '@/widgets/table'
import { Sidebar } from '@/widgets/sidebar'
import { useState } from 'react'
import { ChartWidget } from '@/widgets/chart'
import { CalendarWidget } from '@/widgets/calendar'
import { FilterWidget } from '@/widgets/filter'

export const AdminPage = () => {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="flex-grow overflow-auto bg-[#FBF6F6] p-8 flex flex-col space-y-10">
        <FilterWidget />
        <div className="flex space-x-4">
          <Statistics />
          <CalendarWidget />
        </div>
      </div>
    </div>
  )
}

const Statistics = () => {
  const [activeTab, setActiveTab] = useState<'chart' | 'table'>('chart')

  return (
    <div className="w-full flex flex-col space-y-3 flex-2">
      <select
        value={activeTab}
        className="w-max"
        onChange={(e) =>
          setActiveTab(e.currentTarget.value as 'chart' | 'table')
        }
      >
        <option value="table">Таблица</option>
        <option value="chart">График</option>
      </select>
      {activeTab === 'table' && <TableWidget />}
      {activeTab === 'chart' && <ChartWidget />}
    </div>
  )
}
