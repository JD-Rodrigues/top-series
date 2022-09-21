import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchShows } from "../../adapters"
import { NoResults } from "../../components/noResults"
import { SearchResults } from "../../components/searchResults"
import { ITopShow } from "../../types"

export function Search(){
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState<ITopShow[]>([])
    const {name} = useParams() 
    
    const fetchResults = async () => {
        setLoading(true)
        const shows = name && await searchShows(name)
        setResults(shows)  
        setLoading(false)
        
    }

    useEffect(()=>{
        fetchResults()
    },[])

    
    
    
    return (
        <>
            {loading ? <h2>Loading</h2> : results.length > 0 ? <SearchResults results={results}/> : <NoResults />}
        </>
    )
}