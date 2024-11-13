import { useState } from "react"
import styles from "./styles.module.scss"

export function DropBox({title, content}){

    const [open, setOpen] = useState(false)

    const buttonOpenStyle = open ? {transformOrigin: "16px 16px",transform: "rotate(180deg"} : undefined
    const boxOpenStyle = open ? {display: "flex"} : {display: "none"}

    const handleClick =()=> {
        setOpen(!open)
    }

    return <div className={styles.dropbox}>
        <div className={styles.dropbox__button} onClick={handleClick}>
            <p>
                {title}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={buttonOpenStyle}>
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
            </svg>
        </div>
        <div className={styles.dropbox__background} style={boxOpenStyle}></div>
        <div className={styles.dropbox__box} style={boxOpenStyle}>
            {content}
        </div>
    </div>

}