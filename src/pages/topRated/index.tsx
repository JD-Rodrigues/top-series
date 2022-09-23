import { useState } from "react"
import { getShows } from "../../adapters"
import { Item } from "../../components/item"
import { ITopShow } from "../../types"

export function TopRated() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const shows = await getShows("top_rated")
        setResults(shows)
    }

    getResults()

    return(
        <main className="container">
            {results.map((show:ITopShow)=><Item key={show.id} show={show} />)}
        </main>
    )
}