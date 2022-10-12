import { Login, Navbar } from '@/components'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthGuard from './guards/AuthGuard'
import { PrivateRoutes, PublicRoutes } from './routes'
import RoutesWithNoFound from './utilities/RoutesWithNoFound'
import { Home } from '@/views'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/Theme'

const Private = lazy(() => import('@/views/Private/Private'))

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <RoutesWithNoFound>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            {/* Private */}
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNoFound>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
