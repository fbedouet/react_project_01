import { Footer } from "./components/Footer"
import { Header } from "./components/Header/index"
import "./styles/_init.scss"
import "./styles/_app.scss"
import { Outlet, useLocation } from "react-router-dom"


export function App() {
  const {pathname} = useLocation()

  return<>
      <header>
        <Header selected={pathname} />
      </header>
      <Outlet/>
      <footer>
        <Footer/>
      </footer>
  </>
}