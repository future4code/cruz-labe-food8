import React, { useState, useEffect } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { axiosConfig, baseUrl } from '../../Constants/urls';
import { useParams } from 'react-router-dom'
import ProductsCard from './ProductsCard'
import axios from 'axios'
import { goToLastPage} from '../../Router/coordinator'
import {ButtonBack, Title, HeaderContainer } from './Styled'
import back from '../../Imgs/back.png'

function CardRestaurant() {
    useProtectedPage()
    // const pathParams = useParams()
    // const restaurantId = pathParams.restaurantId
    // const [data] = useRequestData({}, `${baseUrl}/restaurants/2`, axiosConfig)
    const [data, setData] = useState({})
    const { shipping, name, logoUrl, category, address, deliveryTime } = data || {}
    const [product, setProduct] = useState([])
    const [productsCategories, setProductsCategories] = useState([])

    useEffect(() => {
        getRestaurant()
    }, [productsCategories])

    const getRestaurant = async () => {
        try {
            const res = await axios.get(`${baseUrl}/restaurants/2`, axiosConfig)
            setData(res.data.restaurant)
            setProduct(res.data.restaurant.products)
            getCategories()
        } catch (err) {
            alert(`❌ ${err.response.data.message}`)
        }
    }

    //Removendo categorias duplicadas - https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const getCategories = () => {

        let categories = product && product

            .map((product) => {
                return product.category
            })
            .filter(onlyUnique)

        setProductsCategories(categories)
    }

    return (
        <div>
            <HeaderContainer>
                <ButtonBack onClick={() => goToLastPage()}> <img src={back} alt='back' /> </ButtonBack>
                <Title>Busca</Title>
                <p></p>
            </HeaderContainer>
            {name ?
                <>
                    <img src={logoUrl} alt={name} />
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <p>{deliveryTime} min</p>
                    <p> frete R$ {shipping},00</p>
                    <p>{address}</p>

                    {productsCategories.map((category) => {
                        return (
                            <div>
                                <h1> {category} </h1>
                                {product.map((product) => {
                                    if (product.category === category) {
                                        return (
                                            <ProductsCard
                                                key={product.id}
                                                product={product}
                                                restaurant={data}
                                            />
                                        )
                                    }

                                })}

                            </div>
                        )
                    })}

                </>

                : <p>Carregando....</p>
            }

        </div>
    );
}

export default CardRestaurant;