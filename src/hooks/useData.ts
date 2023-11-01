import { useEffect, useState } from "react"
import apiClient from "../services/api-Client"
import { AxiosRequestConfig, CanceledError } from "axios"


interface FetchData<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?: any[]) => {

    const [data, setGenre] = useState<T[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchData<T>>(endpoint, {signal:controller.signal, ...requestConfig})
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
    }, deps ? [...deps] : [])

    return {data, errors, isLoading}

}
export default useData
