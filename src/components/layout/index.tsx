import React from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { TLayoutProps } from "../../types";
import logo from "../../assets/images/logo.png"
import styles from "./styles.module.css"


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
            <header className={styles.header}>
                <img className={styles.logo} src={logo} alt="" />

                <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link 
                            className={styles.menu__option} 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={styles.menu__option} 
                            to="/top-popular"
                        >
                            Mais populares
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={styles.menu__option} 
                            to="/top-rated"
                        >
                            Mais votadas
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={styles.menu__option} 
                            to="/releases"
                        >
                            Lançamentos</Link>
                    </li>
                </ul>
                </nav>
                <form action="" className={styles.form__search}>
                    <input type="search" className={styles.search__field} id="search"/>
                    <button onClick={handleSearch} type="submit" className={styles.search__button}>Buscar</button>
                </form>
            </header>
            <Outlet/>
            <footer className={styles.footer}>© 2022 - Desenvolvido por Domingos Rodrigues</footer>
        </>
    )
}


