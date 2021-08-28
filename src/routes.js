import HomeContainer from '../src/container/Home/Home'
import DetailContainer from '../src/container/Details/Details'

const routes = [
  {
    path: '/',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/detail/:slug',
    component: DetailContainer,
    exact: true
  },

]

export default routes