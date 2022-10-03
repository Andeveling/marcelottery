import { PublicRoutes } from '@/routes'
import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { resetCredentials } from '@/features/auth/authSlice'

const menuStyles = {
  p: 1,
  mx: 0.5,
  '&:hover': {
    backgroundColor: 'rgba(225, 225, 225, .1)',
  },
}

export default function MenuNav() {
  const auth = useAuth()
  const dispatch = useAppDispatch()
  const closeSection = () => dispatch(resetCredentials())

  return (
    <>
      <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.HOME}>
        <Typography variant='subtitle2'>Home</Typography>
      </Button>
      {auth.username ? (
        <Button sx={menuStyles} variant='text' color='inherit' onClick={closeSection}>
          <Typography variant='subtitle2'>Logout</Typography>
        </Button>
      ) : (
        <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.LOGIN}>
          <Typography variant='subtitle2'>Login</Typography>
        </Button>
      )}
    </>
  )
}
