import { useEffect, useState } from "react"
import { searchShowInfo } from "../../adapters"
import { IShowInfo, TShowInfoProps } from "../../types"
import styles from "./styles.module.css"


export function ShowInfo({showId}:TShowInfoProps) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<IShowInfo>()
    
    
    const fetchResult = async () => {
        setLoading(true)
        const show = await searchShowInfo(showId) 
        setResult(await show)  
        setLoading(false)
        console.log(show)
        
    }

    useEffect(()=>{
        fetchResult()
    },[showId])
    
    
    
    return(
        result 
            ? 
                <div className="container">
                    <div className={styles.show__info}>
                        <div className={styles.show__info__poster}>
                            <img 
                                src={`https://www.themoviedb.org/t/p/w440_and_h660_face${result.poster_path}`}
                                alt="Capa do filme" 
                                className={styles.show__info__poster__pic} 
                            />
                            <div 
                                className={styles.show__info__poster__provider}
                            >
                                <img 
                                    src=""
                                    alt="" 
                                    className={styles.show__info__poster__provider__logo}
                                />
                                <p className="show__info__provider">
                                    No ar
                                </p>
                                <p className="watch-now">
                                    Assista agora
                                </p>
                            </div>
                        </div>
                        <main className="show__info__details">
                            <header className="show__details__title">
                                <h1>{result.name}
                                    <span className="show__details__year">
                                    </span>
                                </h1>
                            </header> 
                            <article>
                                <ul className="show__details__genres">

                                </ul>
                                <p className="show__details__duration"
                                >
                                    | 
                                </p>
                                <div className="show__details__rate">
                                    <div className="show__details__rate__value">

                                    </div>
                                    <p className="show__details__rate__label">

                                    </p>
                                </div>
                                <p className="show__details__tagline">

                                </p>
                                <h2
                                    className="show__details__overview__label">
                                </h2>
                                <p className="show__details__overview__text">

                                </p>
                                <ul
                                    className="show__details__creators"
                                >

                                </ul>
                            </article>               
                        </main>
                    </div>
                </div> 
            : 
                null           
    )
}