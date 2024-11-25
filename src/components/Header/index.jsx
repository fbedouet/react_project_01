/* Header component */
import { Link } from "react-router-dom"
import { KasaLogo } from "../KasaLogo/index"
import styles from "./styles.module.scss"

export function Header({selected}){

    return <div className={styles.header}>
        <KasaLogo type={'header'} />
        <nav className={styles.header__nav} >
            <Link 
                to='/'
                style={selected.toLowerCase()==='acceuil'?{textDecoration: 'underline'}:undefined} 
            >
                Acceuil
            </Link>
            <a 
                style={selected.toLowerCase()==='a propos'?{textDecoration: 'underline'}:undefined}
                href="#">A Propos
            </a>
        </nav>
    </div>
}