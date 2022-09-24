export const getShows = async (tag:string | number)=> {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tag}?api_key=8d2504a77b8984c90464eb612505b227&language=pt-BR`)
    
    const responseJson = await response.json()
    const results = await responseJson.results
    return results
}

export const searchShows = async (query:string)=> {

    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=8d2504a77b8984c90464eb612505b227&query=${query}&include_adult=true`)
    
    const responseJson = await response.json()
    const results = await responseJson.results
    return await results
}

export const searchShowInfo = async (id:number)=> {

    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=8d2504a77b8984c90464eb612505b227&include_adult=true`)
    
    const results = await response.json()
    return await results
}

export const searchBrProvider = async (id:number) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=8d2504a77b8984c90464eb612505b227`)
    const results = await response.json()
    return results
}