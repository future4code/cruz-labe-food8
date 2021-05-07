import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url, header) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(url, header)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(`❌ ${error.response.data.message}`)
            })
            setIsLoading(false)
    }, [url])
    return [data, isLoading]
}
export default useRequestData