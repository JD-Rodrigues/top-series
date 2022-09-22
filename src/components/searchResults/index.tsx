import { TSearchResultsProps } from "../../types"


export const SearchResults = ({results}:TSearchResultsProps) => {
    return (
        <>
            {results.map(show => <p key={show.id}>{show.name}</p>)}
        </>
    ) 
}