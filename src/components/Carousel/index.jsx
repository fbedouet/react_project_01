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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" transform="rotate(-90)" className={styles.carousel__arrowLeft} onClick={leftClick}>
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
        </svg>
        <img src={pictures[picture]} alt="" className={styles.carousel__img}/>
        <p className={styles.paging}>{picture+1}/{pictures.length}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" transform="rotate(90)" className={styles.carousel__arrowRight} onClick={rightClick}>
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
        </svg>
    </div>
}