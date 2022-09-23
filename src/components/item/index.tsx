
import { TItemProps } from "../../types";
import styles from "./styles.module.css"
import itemAdd from "../../assets/icons/list-plus.png"
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export function Item({show, setShowId}:TItemProps) {
    const navigate = useNavigate()
    const showInfoHandler = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setShowId(show.id)
        navigate("/show-info")
    }

    return(
        <div className={styles.item}>
            <div 
                className={styles.item__poster}
                style={
                    {
                        backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${show.poster_path})`
                    }
                }
            >
                <div className={styles.item__rate}><p>{show.vote_average.toFixed(1)}</p></div>
                <img className={styles.item__add} src={itemAdd} alt="" />
            </div>
            <Link 
                className={styles.item__name} 
                to="/show-info"
                onClick={showInfoHandler}
            >
                {show.name}
            </Link>
        </div>
    )
}