import { useState } from "react"
import { getShows } from "../../adapters"
import { Item } from "../../components/item"
import { ITopShow } from "../../types"

export function Releases() {
    const [results, setResults] = useState([])

    const getResults = async ()=>{
        const releases = await getShows("on_the_air")
        setResults(releases)
    }

    getResults()

    return(
        <main className="container">
            {results.map((show:ITopShow)=><Item key={show.id} show={show} />)}
        </main>
    )
}