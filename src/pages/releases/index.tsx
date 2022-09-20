import { useState } from "react"
import { getShows } from "../../adapters"
import { ITopShow } from "../../types"

export function Releases() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const releases = await getShows("on_the_air")
        setResults(releases)
    }

    getResults()

    return(
        <>
            {results.map((show:ITopShow)=><p>{show.name}</p>)}
        </>
    )
}