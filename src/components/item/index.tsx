
import { TItemProps } from "../../types";
import styles from "./styles.module.css"
import itemAdd from "../../assets/icons/list-plus.png"

export function Item({show}:TItemProps) {
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
            <div className={styles.item__name}><p>{show.name}</p></div>
        </div>
    )
}