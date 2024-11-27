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
                style={selected.toLowerCase()==='accueil'?{textDecoration: 'underline'}:undefined} 
            >
                Accueil
            </Link>
            <Link 
                to='/apropos'
                style={selected.toLowerCase()==='a propos'?{textDecoration: 'underline'}:undefined}
                // href="#"
            >
                A Propos
            </Link>
        </nav>
    </div>
}