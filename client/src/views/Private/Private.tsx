import { PrivateRoutes } from '@/routes/PrivateRoutes'
import { RoutesWithNoFound } from '@/utilities'
import { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'

// Lazy
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

export default function Private() {
  return (
    <RoutesWithNoFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.DASHBOARD_HOME} element={<Home />} />
    </RoutesWithNoFound>
  )
}
