import { Plus, Search } from 'react-feather'
import * as ROUTES from '../../constants/routes'
export default [
  {
    name: 'Settings',
    icon: <Search />,
    children: [
      {
        name: 'Music Setting',
        // url: ROUTES.SETTING_MUSIC,
      },
    ],
  },
  {
    name: 'Dashboard',
    icon: <Plus />,
    children: [
      {
        name: 'Statistics',
        // url: ROUTES.DASHBOARD_STATISTICS,
      },
    ],
  },
]
