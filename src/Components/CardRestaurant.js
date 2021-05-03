import React from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { axiosConfig, baseUrl } from '../contants/urls';
import {useParams} from 'react-router-dom'
import useRequestData from '../Hooks/useRequestData'

function RestaurantPage() {
    useProtectedPage()
    // const pathParams = useParams()
    // const restaurantId = pathParams.restaurantId
    const [data] = useRequestData([], `${baseUrl}/restaurants/2`, axiosConfig)



    return (
        <div>
            
        </div>
    );
}

export default RestaurantPage;