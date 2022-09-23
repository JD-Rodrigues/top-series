import { useEffect, useState } from "react"
import { searchShows } from "../../adapters"
import { Loading } from "../../components/loading"
import { NoResults } from "../../components/noResults"
import { SearchResults } from "../../components/searchResults"
import { ITopShow, TSearchProps } from "../../types"

export function Search({search, setShowId}:TSearchProps){
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState<ITopShow[]>([])
    
    const fetchResults = async () => {
        setLoading(true)
        const shows = await searchShows(search)
        setResults(shows)  
        setLoading(false)
        
    }

    useEffect(()=>{
        fetchResults()
    },[search])

    
    
    
    return (
        <main className="container">            
            {loading ? <Loading /> : results.length > 0 ? <SearchResults results={results} setShowId={setShowId}/> : <NoResults search={search} />}
        </ main>
    )
}