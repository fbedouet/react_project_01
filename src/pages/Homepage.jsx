import { Banner } from "../components/Banner"
import { Gallery } from "../components/Gallery"
import banneImg from "../assets/images/background_1.jpg"
import LOCATIONS from "../data/locations.json"

export function Homepage () {

    return <main className="homepage">
        <Banner image={banneImg} text={'Chez vous, partout et ailleurs'}/>
        <Gallery locations={LOCATIONS}/>
    </main>
}