import Login from './components/Login'
import Register from './components/Register'
import Index from './components/Index'
import Help from './components/Help'
import Todos from './components/Todos'
import Editmd from './components/Editmd'
import User from './components/User'

export default function (router) {
  router.map({
    '/login': {
      component: Login
    },
    '/register': {
      component: Register
    },
    '/index': {
      component: Index,
      subRoutes: {
        'todos': {
          component: Todos
        },
        'help': {
          component: Help
        },
        'user': {
          component: User
        }
      }
    },
    '/edit': {
      component: Editmd
    }
  })
}
