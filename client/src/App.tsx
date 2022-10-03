import { Login, Navbar } from '@/components'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import AuthGuard from './guards/AuthGuard'
import { PrivateRoutes, PublicRoutes } from './routes'
import RoutesWithNoFound from './utilities/RoutesWithNoFound'
import { Home } from '@/views'

const Private = lazy(() => import('@/views/Private/Private'))

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Navbar />
        <RoutesWithNoFound>
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />

          {/* Private */}
          <Route element={<AuthGuard privateValidation={true} />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNoFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
