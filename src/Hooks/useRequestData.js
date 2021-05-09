import { useEffect, useState } from 'react'
import axios from 'axios'
import { axiosConfig } from '../Constants/urls'
import { useHistory } from "react-router";
import {goToHome} from '../Router/coordinator'

const useRequestData = (initialData, url) => {
    const history = useHistory();
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(window.localStorage.getItem('token')){
        axios.get(url, { headers: { auth: window.localStorage.getItem('token') }})
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(`❌ ${error.response.data.message}`)
            })
            setIsLoading(false)
        } else {goToHome(history)}
    }, [url, window.localStorage.getItem('token'), data])
    return [data, isLoading]
}
export default useRequestData