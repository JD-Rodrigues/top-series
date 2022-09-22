import { useEffect, useState } from "react"
import { searchShowInfo } from "../../adapters"
import { TShowInfoProps } from "../../types"

export function ShowInfo({showId}:TShowInfoProps) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState({})
    
    const fetchResults = async () => {
        setLoading(true)
        const show = await searchShowInfo(showId) 
        setResult(show)  
        setLoading(false)
        
        
    }

    useEffect(()=>{
        fetchResults()
    },[showId])

    
    
    
    
    return(
        loading ? <h2>Loading</h2> :
            <div className="show__info">
                <div className="show__info__poster">
                    <img src="" alt="" className="show__info__poster__pic" />
                    <div className="show__info__poster__provider">
                        <img src="" alt="" className="show__info__poster__provider__logo"/>
                        <p className="show__info__poster__provider__label">
                            No ar
                            <span className="watch-now">
                                Assista agora
                            </span>
                        </p>
                    </div>
                </div>
                <main className="show__info__details">
                    <header className="show__info__details__title">
                        <h1>
                            <span className="show__info__details__year">
                            </span>
                        </h1>
                    </header> 
                    <article>
                        <ul className="show__info__details__genres">

                        </ul>
                        <p className="show__info__details__ep-duration">| </p>
                        <div className="show__info__details__rate">
                            <div className="show__info__details__rate__value"></div>
                            <p className="show__info__details__rate__label"></p>
                        </div>
                        <p className="show__info__details__tagline"></p>
                        <h2 className="show__info__details__overview__label"></h2>
                        <p className="show__info__details__overview__text"></p>
                        <ul className="show__info__details__overview__creators">

                        </ul>
                    </article>               
                </main>
            </div>
    )
}