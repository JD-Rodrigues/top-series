interface ITopShow {
    backdrop_path:string | null;
    first_air_date:string;
    genre_ids:number[];
    id:number;
    name:string;
    origin_country:string[]
    original_language:string;
    original_name:string;
    overview:string;
    popularity:number;
    poster_path:string | null;
    vote_average:number;
    vote_count:number;
}

type TCreator = {
    id:number;
    credit_id:string;
    name:string;
    gender:number;
    profile_path:string | null;
}

type TGenre = {
     id:number;
     name:string;
}

type TNetwork = {
    id:number,
    name:string;
    logo_path:string | null;
    origin_country:string;
 }

 type TProductionCompany = {
    id:number;
    logo_path:string | null;
    name:string;
    origin_country:string;
 }

type TSeason = {
    air_date:string;
    episode_count:number;
    id:number;
    name:string;
    overview:string;
    poster_path:string | null;
    season_number:number
 }

type TSpokenLanguage = {
    english_name:string;
    iso_639_1:string;
    name:string;
 }

interface IShowInfo {
    adult:boolean;
    backdrop_path:string | null;
    created_by: TCreator[],
    episode_run_time:number[],
    first_air_date:string;
    genres: TGenre[]
    homepage:string;
    id:number,
    in_production:boolean;
    languages:string[];
    last_air_date:string;
    last_episode_to_air:{
      air_date:string;
      episode_number:number;
      id:number;
      name:string;
      overview:string;
      production_code:string;
      runtime:number;
      season_number:number;
      show_id:number;
      still_path:string | null;
      vote_average:number;
      vote_count:number;
   };
   name:string;
   next_episode_to_air:string | null,
   networks:TNetwork[];
   original_language:string;
   original_name:string;
   overview:string;
   popularity:number;
   poster_path:string | null;
   production_companies:[
      
   ];
   production_countries:TProductionCompany[]
   seasons:TSeason[]
   spoken_languages:TSpokenLanguage[]
   status:string;
   tagline:string;
   type:string;
   vote_average:number;
   vote_count:number;
}

type TSearchResultsProps = {
    results: ITopShow[]
}

type TSearchProps = {
    search:string
}

type TLayoutProps = {
    setSearch:React.Dispatch<React.SetStateAction<string>>
}

type TShowInfoProps = {
    showId:number
}

type TItemProps = {
    show:ITopShow
}

export type {TSearchProps, TSearchResultsProps, ITopShow, TLayoutProps, IShowInfo, TShowInfoProps, TItemProps}

