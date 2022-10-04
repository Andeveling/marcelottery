import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'
import { submenu } from './subMenuData'

export default function Submenu() {
  const navigate = useNavigate()
  return (
    <>
      <List>
        {submenu?.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.navigate)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
