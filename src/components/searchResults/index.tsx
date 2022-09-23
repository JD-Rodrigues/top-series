import { TSearchResultsProps } from "../../types"
import { Item } from "../item"


export const SearchResults = ({results}:TSearchResultsProps) => {
    return (
        <>
            {results.map(show => <Item key={show.id} show={show} />)}
        </>
    ) 
}