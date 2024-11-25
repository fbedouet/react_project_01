import styles from "./styles.module.scss"
import { KasaLogo } from "../KasaLogo/index"

export function Footer(){
    return <div className={styles.footer}>
        <KasaLogo type={'footer'}/>
        <p>©2020 Kasa. All rights reserved</p>
    </div>
}