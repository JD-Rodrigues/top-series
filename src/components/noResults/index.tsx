import { TNoResultsProps, TSearchProps } from "../../types"
import styles from "./styles.module.css"

export const NoResults = ({search}:TNoResultsProps) => {
    return(
        <h2 className={styles.no__results}>
            Não há resultados para "{search}"
        </h2>
    ) 
}