import React from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { TLayoutProps } from "../../types";


export function Layout({setSearch}:TLayoutProps) {
    const navigate = useNavigate()
    const handleSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const search = document.querySelector("#search") as HTMLInputElement  
        setSearch(search.value)
        navigate(`/search`)
    }
    return(
        <>
            <header>
            <img src="" alt="" />
            <nav>
            <ul>
                <li><Link to="/top-popular">Mais populares</Link></li>
                <li><Link to="/top-rated">Mais votadas</Link></li>
                <li><Link to="/releases">Lançamentos</Link></li>
            </ul>
            <form action="">
                <input type="search" id="search"/>
                <button onClick={handleSearch} type="submit">Buscar</button>
            </form>
            </nav>
            </header>
            <Outlet />
            <footer>© 2022 - Desenvolvido por Domingos Rodrigues</footer>
        </>
    )
}


