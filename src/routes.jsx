import { App } from "./App"
import { APropos } from "./pages/apropos"
import { Logement } from "./pages/logement"

const rooter = [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/:id',
      element: <Logement/>
    },
    {
      path: '/apropos',
      element:<APropos/>
    }
  ]

export default rooter