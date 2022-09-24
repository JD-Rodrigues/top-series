import { useEffect, useState } from "react"
import { getShows } from "../../adapters"
import { Item } from "../../components/item"
import { Loading } from "../../components/loading"
import { ITopShow, TTopShowsProps } from "../../types"

export function TopPopular({setShowId}:TTopShowsProps) {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const getResults = async ()=>{
        setLoading(true)
        const shows = await getShows("popular")
        setResults(shows)
        setLoading(false)
    }

    useEffect(()=>{
        getResults()
    },[])

    return(
        <>
            <header className="page__title">
                    <h1>Séries mais populares</h1>
            </header>
            <main className="container">
                {loading ? <Loading /> : results.map((show:ITopShow)=><Item key={show.id} show={show} setShowId={setShowId}/>)}
            </main>
        </>
    )
}