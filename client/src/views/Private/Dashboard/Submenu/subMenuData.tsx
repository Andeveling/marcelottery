import { PrivateRoutes, PublicRoutes } from '@/routes'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CloseIcon from '@mui/icons-material/Close'

export const submenu = [
  {
    id: 1,
    text: 'Nueva Rifa',
    icon: <AddCircleIcon />,
    navigate: PrivateRoutes.DASHBOARD_HOME,
  },
  {
    id: 2,
    text: 'Cerrar Panel',
    icon: <CloseIcon />,
    navigate: PublicRoutes.HOME,
  },
]
