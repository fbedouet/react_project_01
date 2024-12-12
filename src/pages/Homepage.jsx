import { Banner } from "../components/Banner"
import { Gallery } from "../components/Gallery"
import LOCATIONS from "../data/locations.json"

export function Homepage () {

    return <main>
        <Banner image={'src/assets/images/background_1.jpg'} text={'Chez vous, partout et ailleurs'}/>
        <Gallery locations={LOCATIONS}/>
    </main>
}