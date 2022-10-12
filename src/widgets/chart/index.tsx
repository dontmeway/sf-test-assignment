import {
  AreaChart,
  Legend,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import * as lib from './lib'

export const ChartWidget = () => {
  return (
    <div className="w-full h-[560px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={lib.data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="totalColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5576C" stopOpacity={0.8} />
              <stop offset="90%" stopColor="#F093FB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fulfilledColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66bb6a" stopOpacity={0.8} />
              <stop offset="80%" stopColor="#66bb6a" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            height={70}
            tick={<AxisTick />}
            tickCount={31}
            interval={0}
          />
          <YAxis padding={{ top: 30 }} />
          <Tooltip separator=" - " />
          <Legend verticalAlign="top" height={50} />
          <Area
            animationBegin={400}
            type="monotone"
            name={'Просмотры'}
            dataKey="value"
            fillOpacity={0.9}
            fill="url(#totalColor)"
            stroke="#F5576C"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

const AxisTick = (props: any) => {
  const { x, y, payload } = props

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        fontSize={12}
        textAnchor="end"
        fill="#666"
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  )
}
