import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";


export function Layout() {
    const navigate = useNavigate()
    const handleSearch = () => {
        const search = document.querySelector("#search") as HTMLInputElement   
        search.value && navigate(`search/${search.value}`)
    }
    return(
        <>
            <header>
            <img src="" alt="" />
            <nav>
            <ul>
                <li><Link to="/top-series/top-popular">Mais populares</Link></li>
                <li><Link to="/top-series/top-rated">Mais votadas</Link></li>
                <li><Link to="/top-series/releases">Lançamentos</Link></li>
            </ul>
            <form onSubmit={handleSearch} action="">
                <input type="search" id="search"/>
                <button type="submit">Buscar</button>
            </form>
            </nav>
            </header>
            <Outlet />
            <footer>© 2022 - Desenvolvido por Domingos Rodrigues</footer>
        </>
    )
}


