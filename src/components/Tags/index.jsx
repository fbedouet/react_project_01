import styles from "./styles.module.scss"

export function Tags({tags}){
    const stylizedTag = []
    for(let tag of tags){
        stylizedTag.push(<span className={styles.tags__tag} key={stylizedTag.length}>{tag}</span>)
    }
    return <div className={styles.tags}>
        {stylizedTag}
    </div>
}