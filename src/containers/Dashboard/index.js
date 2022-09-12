import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/BaseLayout'
import Dashboard from './containers/DashboardContainer'
export default () => [
  {
    path: ROUTES.DASHBOARD,
    layout: Layouts,
    component: Dashboard,
  },
]
