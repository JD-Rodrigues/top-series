import { useState } from "react"
import { getShows } from "../../adapters"
import { ITopShow } from "../../types"


export function AiringToday() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const shows = await getShows("airing_today")
        setResults(shows)
    }

    getResults()

    return(
        <>
            {results.map((show:ITopShow)=><p>{show.name}</p>)}
        </>
    )
    
    
}