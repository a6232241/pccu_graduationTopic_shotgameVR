import Index from './pages/Index'
// import AboutUs from './pages/AboutUs'
import Introduction from './pages/Introduction'
import Operating from './pages/Operating'
import NoFound from './pages/NoFound'

const routes = [
  {
    path: '/',
    component: Index,
    exact: true,
    name: 'index',
    title: '主頁',
  },
  // {
  //   path: '/aboutus',
  //   component: AboutUs,
  //   name: 'aboutus',
  //   title: '關於我們',
  // },
  {
    path: '/introduction',
    component: Introduction,
    name: 'introduction',
    title: '敵人&槍枝',
  },
  {
    path: '/operating',
    component: Operating,
    name: 'operating',
    title: '闖關流程',
  },
  {
    component: NoFound,
  },
]

export default routes
