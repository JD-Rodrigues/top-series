import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { TLayoutProps } from "../../types";
import logo from "../../assets/images/logo.png"
import styles from "./styles.module.css"
import burguer from "../../assets/icons/menu-hamburguer.svg"


export function Layout({setSearch}:TLayoutProps) {
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const search = document.querySelector("#search") as HTMLInputElement  
        setSearch(search.value)
        search.value && navigate(`/search`)
    }
    
    return(
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="" />
                </Link>
                <nav>
                <ul className={styles.menu} id={mobileMenu ? styles.show__menu : ""}>
                    <div 
                        className={styles.x__close__menu}
                        onClick={()=>setMobileMenu(false)}
                    >
                    </div>
                    <li>
                        <Link 
                            to="/"
                            className={styles.menu__option} 
                            onClick={()=>setMobileMenu(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/top-popular"
                            className={styles.menu__option} 
                            onClick={()=>setMobileMenu(false)}
                        >
                            Mais populares
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/top-rated"
                            className={styles.menu__option} 
                            onClick={()=>setMobileMenu(false)}
                        >
                            Mais votadas
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/releases"
                            className={styles.menu__option} 
                            onClick={()=>setMobileMenu(false)}
                        >
                            Lançamentos</Link>
                    </li>
                </ul>
                </nav>
                <form action="" className={styles.form__search}>
                    <input type="search" className={styles.search__field} id="search"/>
                    <button onClick={handleSearch} type="submit" className={styles.search__button}>Buscar</button>
                </form>
                <div className={styles.menu__burguer__btn}
                    onClick = {()=>setMobileMenu(true)}
                >
                        <img src={burguer} 
                            alt="Botão do menu" 
                        />
                </div>
            </header>
            <Outlet/>
            <footer className={styles.footer}>© 2022 - Desenvolvido por Domingos Rodrigues</footer>
        </>
    )
}


