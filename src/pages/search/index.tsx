import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchShows } from "../../adapters"
import { NoResults } from "../../components/noResults"
import { SearchResults } from "../../components/searchResults"
import { ITopShow } from "../../types"

export function Search(){
    const [results, setResults] = useState<ITopShow[]>([])
    const {name} = useParams() 
    
    const fetchResults = async () => {
        const shows = name && await searchShows(name)
        setResults(shows)  
        
    }

    useEffect(()=>{
        fetchResults()
    },[])

    
    
    
    return (
        <>
            {results.length > 0 ? <SearchResults results={results}/> : <NoResults />}
        </>
    )
}