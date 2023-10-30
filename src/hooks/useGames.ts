import { useEffect, useState } from "react"
import apiClient from "../services/api-Client"
import { CanceledError } from "axios"

 export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id:number,
    name:string
    background_image: string
    parent_platforms: {platform:Platform} []
    metacritic: number
}

interface FetchGamesData {
    count:number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    //fetching games
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchGamesData>('/games', {signal: controller.signal})
        .then(res => {
            setGames(res.data.results)
            setIsLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError ) return
            setErrors(err.message)
            setIsLoading(false)
        })
        return () => controller.abort()   
    },[])
    return {games,errors, isLoading}
}

export default useGames