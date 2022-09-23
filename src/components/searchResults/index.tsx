import { TSearchResultsProps } from "../../types"
import { Item } from "../item"


export const SearchResults = ({results, setShowId}:TSearchResultsProps) => {
    return (
        <>
            {results.map(show => <Item setShowId={setShowId} key={show.id} show={show} />)}
        </>
    ) 
}