import { useLocation, useRouteError, Link } from "react-router-dom"

export function PageError() {
    const location = useLocation()
    const state = location.state || { errorCode: "Unknown" };

    return <main className="error">
        <p className="error__code">{state.errorCode}</p>
        <p className="error__text">Oups! La page que vous demandez n'exist pas.</p>
        <Link 
                to='/'
                className="error__link"
            >
                Retourner sur la page d'accueil
        </Link>
    </main>
}