import { ClientLayout } from '../layouts';
import { Home, Courses } from '../pages/Client';

const routesClient = [
  {
    path:'/',
    layout: ClientLayout,
    component: Home
  },
  {
    path:'/cursos',
    layout: ClientLayout,
    component: Courses
  },
]

export default routesClient