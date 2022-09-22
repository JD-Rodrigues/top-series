import { useState } from "react"
import { getShows } from "../../adapters"
import { Item } from "../../components/item"
import { ITopShow } from "../../types"


export function AiringToday() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const shows = await getShows("airing_today")
        setResults(shows)
    }

    getResults()

    return(
        <main className="container">
            {results.map((show:ITopShow)=><Item show={show} />)}
        </main>
    )
    
    
}