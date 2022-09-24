import { useEffect, useState } from "react"
import { getShows } from "../../adapters"
import { Item } from "../../components/item"
import { Loading } from "../../components/loading"
import { ITopShow, TTopShowsProps } from "../../types"

export function Releases({setShowId}:TTopShowsProps) {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const getResults = async ()=>{
        setLoading(true)
        const releases = await getShows("on_the_air")
        setResults(releases)
        setLoading(false)
    }

    useEffect(()=>{
        getResults()
    },[])

    return(
        <>
            <header className="page__title">
                <h1>Séries em lançamento</h1>
            </header>
            <main className="container">
                {loading ? <Loading /> : results.map((show:ITopShow)=><Item key={show.id} show={show} setShowId={setShowId} />)}
            </main> 
        </>
    )
}