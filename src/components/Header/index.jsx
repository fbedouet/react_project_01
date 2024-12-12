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
                style={selected.toLowerCase()==='/'?{textDecoration: 'underline'}:undefined} 
            >
                Accueil
            </Link>
            <Link 
                to='/apropos'
                style={selected.toLowerCase()==='/apropos'?{textDecoration: 'underline'}:undefined}
                // href="#"
            >
                A Propos
            </Link>
        </nav>
    </div>
}