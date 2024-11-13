import styles from "./styles.module.scss"

export function Carousel ({pictures}){
    return <div className={styles.carousel}>
        <img src={pictures[1]} alt="" className={styles.carousel__img}/>
    </div>
}