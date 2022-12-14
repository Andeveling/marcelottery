import { PrivateRoutes } from '@/routes/PrivateRoutes'
import { RoutesWithNoFound } from '@/utilities'
import { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Raffle } from './Dashboard'
import Home from './Home/Home'
import Lottery from './Dashboard/Lottery/Lottery'

// Lazy
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const RaffleTicketsP = lazy(() => import('./Dashboard/Raffle/RaffleTicketsP'))

export default function Private() {
  return (
    <RoutesWithNoFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}>
        <Route path={PrivateRoutes.DASHBOARD_HOME} element={<Home />} />
        <Route path={PrivateRoutes.DASHBOARD_RAFFLES} element={<Raffle />} />
        <Route path={`${PrivateRoutes.DASHBOARD_RAFFLES}/:id`} element={<RaffleTicketsP />} />
        <Route path={PrivateRoutes.DASHBOARD_HISTORY} element={<h2>History</h2>} />
        <Route path={PrivateRoutes.DASHBOARD_SETTINGS} element={<h2>Settings</h2>} />
        <Route path={PrivateRoutes.DASHBOARD_LOTTERY} element={<Lottery />} />
      </Route>
    </RoutesWithNoFound>
  )
}
