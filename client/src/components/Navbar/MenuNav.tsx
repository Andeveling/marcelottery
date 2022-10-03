import { useAuth } from '@/hooks/useAuth'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Logout } from '../Logout'
import { menuStyles } from './menuStyles'

export default function MenuNav() {
  const auth = useAuth()

  return (
    <>
      <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.HOME}>
        <Typography variant='subtitle2'>Home</Typography>
      </Button>
      {auth.username ? (
        <>
          <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PrivateRoutes.PRIVATE}>
            <Typography variant='subtitle2'>Dashboard</Typography>
          </Button>
          <Logout call='nav' />
        </>
      ) : (
        <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.LOGIN}>
          <Typography variant='subtitle2'>Login</Typography>
        </Button>
      )}
    </>
  )
}
