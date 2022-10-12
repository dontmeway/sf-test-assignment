import { useRoutes, Outlet, Navigate } from 'react-router-dom'

import { HomePage } from './home'
import { AdminPage } from './admin'

export const Routing = () => {
  return (
    <>
      {useRoutes([
        {
          path: '/',
          element: <Outlet />,
          children: [
            { index: true, element: <Navigate to="home" replace /> },
            { path: 'home', element: <HomePage /> },
            { path: 'admin', element: <AdminPage /> },
          ],
        },
      ])}
    </>
  )
}
