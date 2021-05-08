import { useEffect, useState } from 'react'
import axios from 'axios'
import { token } from '../Constants/urls'
import { useHistory } from "react-router";
import {goToHome} from '../Router/coordinator'

const useRequestData = (initialData, url, header) => {
    const history = useHistory();
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(token){
        axios.get(url, header)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(`❌ ${error.response.data.message}`)
            })
            setIsLoading(false)
        } else {goToHome(history)}
    }, [url, header, data])
    return [data, isLoading]
}
export default useRequestData