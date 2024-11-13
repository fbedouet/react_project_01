
import styles from "./styles.module.scss"

export function Banner ({image, text}){
    return <div className={styles.banner}>
        <img 
            src={image}
            alt="bannière"
            className={styles.banner__img}
        />
        <div className={styles.banner__sloggan}>
            <span>{text}</span>
        </div>
    </div>
}