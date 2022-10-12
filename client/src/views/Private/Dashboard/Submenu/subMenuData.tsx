import { PrivateRoutes, PublicRoutes } from '@/routes'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CloseIcon from '@mui/icons-material/Close'

export const submenu = [
  {
    id: 1,
    text: 'Loterias',
    icon: <AddCircleIcon />,
    navigate: PrivateRoutes.DASHBOARD_LOTTERY,
  },
  {
    id: 2,
    text: 'Rifas',
    icon: <AddCircleIcon />,
    navigate: PrivateRoutes.DASHBOARD_RAFFLES,
  },

  {
    id: 3,
    text: 'Cerrar Panel',
    icon: <CloseIcon />,
    navigate: PublicRoutes.HOME,
  },
]
