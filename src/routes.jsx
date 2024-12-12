import { App } from "./App"
import { About } from "./pages/About"
import { Apartment } from "./pages/Apartment"
import { Homepage } from "./pages/Homepage"
import { PageError } from "./pages/PageError"


const rooter = [
    {
      path: '/',
      element: <App/>,
      errorElement: <PageError/>,
      children: [
        {
          path: '',
          element: <Homepage/>,
        },
        {
          path: '/apropos',
          element:<About/>,
        },
        {
          path: '/:id',
          element: <Apartment/>,
        },
        {
          path:'/error404',
          element: <PageError/>,
        }
      ]
    },
  ]

export default rooter