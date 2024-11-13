import { App } from "./App"
import { Logement } from "./pages/logement"

const rooter = [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/:id',
      element: <Logement/>
    }
  ]

export default rooter