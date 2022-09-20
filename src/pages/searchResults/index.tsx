import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchShows } from "../../adapters"
import { ITopShow } from "../../types"

export function SearchResults(){
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
            {results.map(show => <p key={show.id}>{show.name}</p>)}
        </>
    )
}