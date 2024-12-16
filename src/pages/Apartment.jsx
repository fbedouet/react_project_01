import LOCATIONS from "../data/locations.json"
import { Navigate, useParams} from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { Rate } from "../components/rate";
import { DropBox } from "../components/dropbox";
import { Tags } from "../components/Tags";

export function Apartment () {
    const boxContent =(items)=> {
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

    const {id}=useParams()
    const ids = LOCATIONS.map(elt=>elt.id)

    if(!ids.includes(id)){
        return <Navigate to="/error404" state={{errorCode: 404 }}/>
    }
    
    const {title, pictures, description, host, rating, equipments, location, tags} = LOCATIONS.find(elt=>elt.id===id)
    const hostNames = host.name.split(" ")

    return <main>
        <Carousel pictures={pictures}/>
        <div className="logement">
            <div className="logementInformation1">
                <div>
                    <p className="logementInformation1__title">{title}</p>
                    <p className="logementInformation1__location">{location}</p>
                    <Tags tags={tags}/>
                </div>
            </div>
            <div className="logementInformation2">
                <div className="logementInformation2__host">
                    <div>
                        <p >{hostNames[0]}</p>
                        <p>{hostNames[1]}</p>
                    </div>
                    <img src={host.picture} alt="" className="logementInformation2__hostPicture"/>
                </div>
                <Rate rating={rating}/>
            </div>
        </div>
            <div className="logementInformation3">
                <DropBox title={"Description"} content={boxContent(description)}/>
                <DropBox title={"Équipements"} content={boxContent(equipments)}/>
            </div>
    </main>

}