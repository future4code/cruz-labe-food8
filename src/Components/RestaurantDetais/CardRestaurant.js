import React, { useState, useEffect } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { axiosConfig, baseUrl } from '../../Constants/urls';
import { useParams } from 'react-router-dom'
import ProductsCard from './ProductsCard'
import axios from 'axios'
import { gotToLastPage } from '../../Router/coordinator'
import { ButtonBack, Title, HeaderContainer, ContainerInformation, useStyles } from './Styled'
import back from '../../Imgs/back.png'
import {Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';


function CardRestaurant() {
    const classes = useStyles();
    useProtectedPage()
    const pathParams = useParams()
    const restaurantId = pathParams.restaurantId
    const [data, setData] = useState({})
    const { shipping, name, logoUrl, category, address, deliveryTime } = data || {}
    const [product, setProduct] = useState([])
    const [productsCategories, setProductsCategories] = useState([])

    useEffect(() => {
        getRestaurant()
    }, [productsCategories])

    const getRestaurant = async () => {
        try {
            const res = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, axiosConfig)
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
                <ButtonBack onClick={() => gotToLastPage()}> <img src={back} alt='back' /> </ButtonBack>
                <Title restaurant>Restaurante</Title>
                <p></p>
            </HeaderContainer>
            {name ?
                <>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={logoUrl}
                                title={name}
                            />
                            <CardContent>
                                <Typography className={classes.title} color='primary' variant="p" component="p">{name} </Typography>

                                <Typography className={classes.information} component="p">
                                {category}
                                </Typography>
                                <ContainerInformation frete>
                                    <Typography className={classes.information} component="p">
                                        {deliveryTime} min
                                        </Typography>
                                    <Typography className={classes.information} component="p">
                                        Frete R${shipping},00
                                    </Typography>
                                </ContainerInformation>
                                <Typography className={classes.address} component="p">{address}</Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                    {productsCategories.map((category) => {
                        return (
                            <>
                                <Typography className={classes.categoryTitle} component="p"> {category} </Typography>
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
                            </>
                        )
                    })}

                </>

                : <p>Carregando....</p>
            }

        </div >
    );
}

export default CardRestaurant;