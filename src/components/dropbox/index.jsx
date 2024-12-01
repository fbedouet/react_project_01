import { useState } from "react"
import styles from "./styles.module.scss"

export function DropBox({title, content}){

    const [open, setOpen] = useState(false)

    const buttonOpenStyle = open ? {transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}
    const boxOpenStyle = open ? {transform: "scaleY(1)"} : {transform: "scaleY(0)"}
    const containerOpenStyle = open ? {maxHeight: "300px"} : {maxHeight: "52px"}

    const handleClick =()=> {
        setOpen(!open)
    }

    return <div className={styles.dropbox} style={containerOpenStyle}>
        <div className={styles.dropbox__buttonspacing}></div>
        <div className={styles.dropbox__button} onClick={handleClick}>
            <p>
                {title}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={buttonOpenStyle}>
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
            </svg>
        </div>
        <div className={styles.dropbox__box} style={boxOpenStyle}>
            {content}
        </div>
    </div>

}