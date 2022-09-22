interface ITopShow {
    backdrop_path:string;
    first_air_date:string;
    genre_ids:number[];
    id:number;
    name:string;
    origin_country:string[]
    original_language:string;
    original_name:string;
    overview:string;
    popularity:number;
    poster_path:string;
    vote_average:number;
    vote_count:number;
}

interface SearchResultsProps {
    results: ITopShow[]
}

interface SearchProps {
    search:string
}

interface LayoutProps {
    setSearch:React.Dispatch<React.SetStateAction<string>>
}

export type {SearchProps, SearchResultsProps, ITopShow, LayoutProps}

