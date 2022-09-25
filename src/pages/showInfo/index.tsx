import { useEffect, useState } from "react"
import { searchBrProvider, searchShowInfo } from "../../adapters"
import { IBrProvider, IShowInfo, TShowInfoProps } from "../../types"
import styles from "./styles.module.css"
import sad from "../../assets/images/sad.png"
import { Link } from "react-router-dom"
import { Loading } from "../../components/loading"


export function ShowInfo({showId}:TShowInfoProps) {
    const [result, setResult] = useState<IShowInfo>()
    const [brProvider, setBrProvider] = useState<IBrProvider>()
    const [loading, setLoading] = useState(false)
    
    
    const fetchResult = async () => {
        setLoading(true)
        const show = await searchShowInfo(showId) 
        const providers = await searchBrProvider(showId)
        setResult(await show)  
        setBrProvider(await providers.results.BR)
        setLoading(false)     
    }

    useEffect(()=>{
        fetchResult()
    },[showId])
    
    
    
    return(
        <div className={styles.show__info__wrapper}>
            {loading ? <Loading /> :
            result ?
                <div className="container" 
                    id={styles.show__info__bg} 
                    style={
                        {
                            backgroundImage:`url("https://www.themoviedb.org/t/p/w440_and_h660_face${result.backdrop_path}")`
                    
                }}>
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
                                            src={brProvider ? `https://www.themoviedb.org/t/p/original${ brProvider.flatrate[0].logo_path}` : sad}
                                            alt="Logo do serviço de streaming" 
                                            className={styles.show__info__poster__provider__logo}
                                        />
                                        {
                                            brProvider 
                                                ?   
                                                    <p 
                                                        className={styles.streaming}
                                                    >
                                                        Streaming
                                                    </p>
                                                :   
                                                    <p
                                                        className={styles.streaming}
                                                    >
                                                        Não disponível em streaming
                                                    </p>
                                        }
                                        
                            </div>
                        </div>
                        <main className={styles.show__info__details}>
                            <header>
                                <h1 className={styles.show__details__title}>    {result.name}  
                                    <span className={styles.show__details__year}>
                                    {(` (${result.first_air_date.substring(0,4)})`)}
                                    </span>
                                </h1>
                            </header> 
                            
                            <ul className={styles.show__details__genres}>
                                    {result.genres.map((genre, i, arr) =>   i === arr.length - 1 
                                        ? <li key={genre.id}>
                                            {genre.name} | {result.episode_run_time[0]}m
                                            </li> 
                                        : <li key={genre.id}>
                                            {(`${genre.name},`)}
                                            </li>)}
                            </ul>
                            <div className={styles.show__details__rate}>
                                <div 
                                    className={styles.show__details__rate__value}>
                                        {result.vote_average.toFixed(1)}
                                </div>
                                <p>Avaliação dos usuários</p>
                            </div>
                            <p className={styles.show__details__tagline}>
                                    {result.tagline}
                            </p>
                            <h2
                                className={
                                    styles.show__details__overview__title
                                }
                            >
                                    Sinopse:
                            </h2>
                            <p className={styles.show__details__overview__text}>
                                    {result.overview}
                            </p>
                            <ul
                                className={styles.show__details__creators}
                            >   Criadores:
                                {result.created_by.map((creator, i, arr) =>   
                                i === arr.length - 1 
                                        ? <li key={creator.id}>
                                            {creator.name}
                                            </li> 
                                        : <li key={creator.id}>
                                            {(`${creator.name},`)}
                                            </li>)}
                            </ul>              
                        </main>
                    </div>
                </div> 
            : 
                null  }        
        </div>
         
    )
}