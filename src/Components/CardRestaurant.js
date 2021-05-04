import React, { useState, useEffect } from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { axiosConfig, baseUrl } from '../Constants/urls';
import { useParams } from 'react-router-dom'
import useRequestData from '../Hooks/useRequestData'

function CardRestaurant() {
    useProtectedPage()
    // const pathParams = useParams()
    // const restaurantId = pathParams.restaurantId
    const [data] = useRequestData({}, `${baseUrl}/restaurants/2`, axiosConfig)
    const restaurant = data && data.restaurant
    const [menu, setMenu] = useState([])
    const { shipping, name, logoUrl, category, address, deliveryTime, products } = restaurant || {}
    // const product = data.restaurant

   console.log(products)

    return (
        <div>
            {menu ?
                <>
                    <img src={logoUrl} alt={name} />
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <p>{deliveryTime} min</p>
                    <p> frete R$ {shipping},00</p>
                    <p>{address}</p>

                    
                </>
                : <p>Carregando....</p>
            }
        </div>
    );
}

export default CardRestaurant;