import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import dayjs from 'dayjs'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
