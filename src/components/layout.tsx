import { Outlet } from "react-router-dom";


export function Layout() {
    return(
        <>
            <header>
            <img src="" alt="" />
            <nav>
            <ul>
                <li><a href="">Mais populares</a></li>
                <li><a href="">Mais votadas</a></li>
                <li><a href="">Lançamentos</a></li>
            </ul>
            </nav>
            </header>
            <Outlet />
            <footer>© 2022 - Desenvolvido por Domingos Rodrigues</footer>
        </>
    )
}


