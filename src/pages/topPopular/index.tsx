import { useState } from "react"
import { getShows } from "../../adapters"
import { ITopShow } from "../../types"

export function TopPopular() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const shows = await getShows("on_the_air")
        setResults(shows)
    }

    getResults()

    return(
        <>
            {results.map((show:ITopShow)=><p>{show.name}</p>)}
        </>
    )
}