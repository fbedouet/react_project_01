import LOCATIONS from "./data/locations.json"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header/index"
import { Thumb } from "./components/Gallery/Thumb"
import "./styles/_init.scss"
import "./styles/_app.scss"


export function App() {

return<>
  <Header selected={'A propos'} />
  <main>
    <Banner image={'src/assets/images/background_1.jpg'} text={'Chez vous, partout et ailleurs'}/>
    <Gallery locations={LOCATIONS}/>
  </main>
  <Footer/>
</>
}