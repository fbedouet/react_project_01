import { Banner } from "../components/Banner";
import { DropBox } from "../components/dropbox";
import bannerImg from "../assets/images/background_2.jpg"

export function About (){
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
    const service = "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance"
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
    
    return <main>
        <div className="apropos">
            <Banner image={bannerImg}/>
            <div className="apropos__dropbox">
                <DropBox title={"Fiabilité"} content={reliability}/>
                <DropBox title={"Respect"} content={respect} />
                <DropBox title={"Service"} content={service} />
                <DropBox title={"Sécurité"} content={security} />
            </div>
        </div>
    </main>
}