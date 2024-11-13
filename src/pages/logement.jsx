import "../styles/_logement.scss"
import LOCATIONS from "../data/locations.json"
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Rate } from "../components/rate";
import { DropBox } from "../components/dropbox";

export function Logement () {

    const {id}=useParams()
    const {title, pictures, description, host, rating, equipments, location, tags} = LOCATIONS.filter(elt=>elt.id===id)[0]
    const hostNames = host.name.split(" ")
    const stylizedTag = []

    const boxContent =(items)=>{
        const content =[]
        if (typeof(items)!=="string"){
            for(let item of items){
                content.push(<p key={item}>{item}</p>)
            }
        }else{
            content.push(<p key={1}>{items}</p>)
        }
        return content
    }

    for(let tag of tags){
        stylizedTag.push(<span className="logementInformation2__tagsTag" key={stylizedTag.length}>{tag}</span>)
    }

    return <>
        <Header selected={''} />
        <main>
            <Carousel pictures={pictures}/>
            <div className="logementInformation1">
                <div>
                    <p className="logementInformation1__title">{title}</p>
                    <p className="logementInformation1__location">{location}</p>
                </div>
                <div>
                    <div className="logementInformation1__host">
                        <div>
                            <p >{hostNames[0]}</p>
                            <p>{hostNames[1]}</p>
                        </div>
                        <img src={host.picture} alt="" className="logementInformation1__hostPicture"/>
                    </div>
                </div>
            </div>
            <div className="logementInformation2">
                <div className="logementInformation2__tags">
                        {stylizedTag}
                </div>
                <div className="logementInformation2__rate">
                        <Rate rating={rating}/>
                </div>
            </div>
            <div className="logementInformation3">
                <DropBox title={"Description"} content={boxContent(description)}/>
                <DropBox title={"Équipements"} content={boxContent(equipments)}/>
            </div>
        </main>
        <Footer/>
    </>
}