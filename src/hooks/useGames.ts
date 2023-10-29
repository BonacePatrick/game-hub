import { useEffect, useState } from "react"
import apiClient from "../services/api-Client"
import { CanceledError } from "axios"

export interface Game {
    id:number,
    name:string
    background_image: string
}

interface FetchGamesData {
    count:number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState('')

    //fetching games
    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<FetchGamesData>('/games', {signal: controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError ) return
            setErrors(err.message)
        })
        return () => controller.abort()   
    },[])
    return {games,errors}
}

export default useGames