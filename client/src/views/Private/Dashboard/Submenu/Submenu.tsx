import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'
import { submenu } from './subMenuData'

interface Props {
  handleDrawerToggle: () => void
}

export default function Submenu({ handleDrawerToggle }: Props) {
  const navigate = useNavigate()
  const handleButton = (navigateRoute: string) => {
    handleDrawerToggle()
    navigate(navigateRoute)
  }
  return (
    <>
      <List>
        {submenu?.map((item) => (
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
