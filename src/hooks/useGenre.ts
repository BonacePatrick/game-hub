import { useEffect, useState } from "react"
import apiClient from "../services/api-Client"
import { CanceledError } from "axios"

interface Genre {
    id:number
    name:string
}

interface FetchGenreData {
    count: number
    results: Genre[]
}

const useGenre = () => {

    const [genres, setGenre] = useState<Genre[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchGenreData>('/genres', {signal:controller.signal})
        .then(res => {
            setGenre(res.data.results)
            setIsLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError) return
            setErrors(err.message)
            setIsLoading(false)
        })
        return () => controller.abort()
    },[])

    return {genres, errors, isLoading}

}
export default useGenre
