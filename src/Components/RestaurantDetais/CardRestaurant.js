import React, { useState, useEffect, useContext } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { axiosConfig, baseUrl } from '../../Constants/urls';
import { useHistory, useParams } from 'react-router-dom'
import ProductsCard from './ProductsCard'
import axios from 'axios'
import { ButtonBack, Title, HeaderContainer, ContainerInformation, useStyles } from './Styled'
import { goToLastPage } from '../../Router/coordinator'
import back from '../../Imgs/back.png'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import GlobalStateContext from '../../GlobalState/GlobalStateContext';

function CardRestaurant() {
    useProtectedPage()
    const classes = useStyles();
    const history = useHistory()
    const {states, requests} = useContext(GlobalStateContext)
    const pathParams = useParams()
    const restaurantId = pathParams.restaurantId
    const { shipping, name, logoUrl, category, address, deliveryTime } = states.dataRestaurant || {}

    useEffect(() => {
        requests.getRestaurantDetail(restaurantId)
    }, [states.productsCategories])

    const timeDelivery = deliveryTime + 15

    const goback = () => {
        history.goBack()
    }

    return (
        <div>
            <HeaderContainer>

                <ButtonBack onClick={() => goback()}> <img src={back} alt='back' /> </ButtonBack>
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
                                        {deliveryTime} - {timeDelivery} min
                                        </Typography>
                                    <Typography className={classes.information} component="p">
                                        Frete R${shipping},00
                                    </Typography>
                                </ContainerInformation>
                                <Typography className={classes.address} component="p">{address}</Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                    {states.productsCategories.map((category) => {
                        return (
                            <>
                                <Typography className={classes.categoryTitle} component="p"> {category} </Typography>
                                {states.product.map((product) => {
                                    if (product.category === category) {
                                        return (
                                            <ProductsCard
                                                key={product.id}
                                                product={product}
                                                restaurant={states.dataRestaurant}
                                                restaurantId={restaurantId}
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