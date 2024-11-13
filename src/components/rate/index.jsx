import { Star } from "./star"
import styles from "./styles.module.scss"

export function Rate ({rating}) {

    const stars = []
    for (let index = 1; index < 6; index++) {
        if(index<=rating){
            stars.push(<Star type={"fill"} key={index}/>)
        }else{
            stars.push(<Star type={"empty"} key={index}/>)
        }
        
    }
    
    return<>
        {stars}
    </>
    
}