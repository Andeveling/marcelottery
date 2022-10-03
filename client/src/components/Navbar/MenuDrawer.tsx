import { useAuth } from '@/hooks/useAuth'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Link as RouterLink } from 'react-router-dom'
import { Logout } from '../Logout'

export default function MenuDrawer() {
  const auth = useAuth()

  return (
    <List sx={{ textAlign: 'center' }}>
      <ListItem disablePadding>
        <Button fullWidth variant='text' color='primary' component={RouterLink} to={PublicRoutes.HOME}>
          <ListItemText sx={{ textAlign: 'center' }}>Home</ListItemText>
        </Button>
      </ListItem>
      {auth.username ? (
        <>
          <ListItem disablePadding>
            <Button fullWidth variant='text' color='primary' component={RouterLink} to={PrivateRoutes.PRIVATE}>
              <ListItemText sx={{ textAlign: 'center' }}>Dashboard</ListItemText>
            </Button>
          </ListItem>
          <Logout call='drawer' />
        </>
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
