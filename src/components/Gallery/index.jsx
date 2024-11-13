import styles from "./styles.module.scss"
import { Thumb } from "./Thumb"

export function Gallery ({locations}) {

    const items = []
    for (let location of locations){
        items.push(<Thumb titre={location.title} cover={location.cover} id={location.id} key={location.id}/>)
    }

    return <div className={styles.gallery}>
        {items}
    </div>
}