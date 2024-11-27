import LOCATIONS from "../data/locations.json"
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Rate } from "../components/rate";
import { DropBox } from "../components/dropbox";
import { Tags } from "../components/Tags";

export function Logement () {

    const {id}=useParams()
    const {title, pictures, description, host, rating, equipments, location, tags} = LOCATIONS.filter(elt=>elt.id===id)[0]
    const hostNames = host.name.split(" ")

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

    return <>
        <header>
            <Header selected={''} />
        </header>
        <main>
            <Carousel pictures={pictures}/>
            <div className="logement">
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
                    <Tags tags={tags}/>
                    <Rate rating={rating}/>
                </div>
                <div className="logementInformation3">
                    <DropBox title={"Description"} content={boxContent(description)}/>
                    <DropBox title={"Équipements"} content={boxContent(equipments)}/>
                </div>
            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
}