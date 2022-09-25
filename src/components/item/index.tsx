
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
            <Link 
                to="/show-info" 
                className={styles.item__anchor}
                onClick={showInfoHandler}>
                <div 
                    className={styles.item__poster}
                    style={
                        {
                            backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${show.poster_path})`
                        }
                    }
                >
                    <p className={styles.item__rate}>{show.vote_average.toFixed(1)}</p>
                    <img className={styles.item__add} src={itemAdd} alt="" />
                </div>
            </Link>
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