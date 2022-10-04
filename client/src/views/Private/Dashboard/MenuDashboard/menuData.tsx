import DashboardIcon from '@mui/icons-material/Dashboard'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import SettingsIcon from '@mui/icons-material/Settings'
import { PrivateRoutes } from '@/routes'

export const menu = [
  {
    id: 1,
    text: 'Inicio',
    icon: <DashboardIcon />,
    navigate: PrivateRoutes.DASHBOARD_HOME,
  },
  {
    id: 2,
    text: 'Histotial',
    icon: <PendingActionsIcon />,
    navigate: PrivateRoutes.DASHBOARD_HISTORY,
  },
  {
    id: 3,
    text: 'Configuración',
    icon: <SettingsIcon />,
    navigate: PrivateRoutes.DASHBOARD_SETTINGS,
  },
]
