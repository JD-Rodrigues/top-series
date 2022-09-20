import { useState } from "react"
import { getShows } from "../../adapters"
import { ITopShow } from "../../types"

export function TopRated() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const shows = await getShows("top_rated")
        setResults(shows)
    }

    getResults()

    return(
        <>
            {results.map((show:ITopShow)=><p>{show.name}</p>)}
        </>
    )
}