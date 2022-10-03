import { PublicRoutes } from '@/routes'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { resetCredentials } from '@/features/auth/authSlice'

export default function MenuDrawer() {
  const auth = useAuth()
  const dispatch = useAppDispatch()
  const closeSection = () => dispatch(resetCredentials())
  return (
    <List sx={{ textAlign: 'center' }}>
      <ListItem disablePadding>
        <Button fullWidth variant='text' color='primary' component={RouterLink} to={PublicRoutes.HOME}>
          <ListItemText sx={{ textAlign: 'center' }}>Home</ListItemText>
        </Button>
      </ListItem>
      {auth.username ? (
        <ListItem disablePadding>
          <Button fullWidth variant='text' color='primary' onClick={closeSection}>
            <ListItemText sx={{ textAlign: 'center' }}>Logout</ListItemText>
          </Button>
        </ListItem>
      ) : (
        <ListItem disablePadding>
          <Button fullWidth variant='text' color='primary' component={RouterLink} to={PublicRoutes.LOGIN}>
            <ListItemText sx={{ textAlign: 'center' }}>Login</ListItemText>
          </Button>
        </ListItem>
      )}
    </List>
  )
}
