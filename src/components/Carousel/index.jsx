import { useState } from "react"
import styles from "./styles.module.scss"

export function Carousel ({pictures}){

    const [picture, setPicture] = useState(0)

    const leftClick =()=>{
        setPicture((p)=>{
            if (p === 0){
                return pictures.length-1
            }else{
                return picture-1
            }
        })
    }

    const rightClick =()=>{
        setPicture((p)=>{
            if (p === pictures.length-1){
                return 0
            }else{
                return picture+1
            }
        })
    }

    return <div className={styles.carousel}>
        <svg className={styles.carousel__arrowLeft} onClick={leftClick}>
            <line x1="0" y1="0" x2="0" y2="100%" transform="rotate(-90)"/>
            <line x1="0" y1="0" x2="0" y2="100%" />
        </svg>

        <img src={pictures[picture]} alt="" className={styles.carousel__img}/>

        <p className={styles.paging}>{picture+1}/{pictures.length}</p>
        
        <svg className={styles.carousel__arrowRight} onClick={rightClick}>
            <line x1="0" y1="0" x2="0" y2="100%" transform="rotate(-90)"/>
            <line x1="0" y1="0" x2="0" y2="100%" />
        </svg>
    </div>
}