import { useEffect, useState } from "react"
import apiClient from "../services/api-Client"
import { CanceledError } from "axios"


interface FetchData<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint:string) => {

    const [data, setGenre] = useState<T[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchData<T>>(endpoint, {signal:controller.signal})
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

    return {data, errors, isLoading}

}
export default useData
