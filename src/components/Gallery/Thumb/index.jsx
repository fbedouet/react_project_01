import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export function Thumb({titre, cover, id}){

    return <>
        <Link
            to={`/${id}`}
            className={styles.thumb}
        >
                <img src={cover} alt="" className={styles.thumb__cover}/>
                <p>{titre}</p>
        </Link>
    </>
}