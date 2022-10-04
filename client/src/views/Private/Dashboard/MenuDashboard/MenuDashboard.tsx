import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { menu } from './menuData'
import { useNavigate } from 'react-router-dom'

interface Props {
  handleDrawerToggle: () => void
}

export default function MenuDashboard({ handleDrawerToggle }: Props) {
  const navigate = useNavigate()
  const handleButton = (navigateRoute: string) => {
    handleDrawerToggle()
    navigate(navigateRoute)
  }
  return (
    <>
      <List>
        {menu?.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => handleButton(item.navigate)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
