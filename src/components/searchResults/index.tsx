import { SearchResultsProps } from "../../types"


export const SearchResults = ({results}:SearchResultsProps) => {
    return (
        <>
            {results.map(show => <p key={show.id}>{show.name}</p>)}
        </>
    ) 
}