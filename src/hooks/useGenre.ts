import genreData from "../data/genreData"



export interface Genre {
    id:number
    name:string
    image_background: string
}

const useGenre = () => ({data: genreData, isLoading: false, errors: null})

  
export default useGenre
