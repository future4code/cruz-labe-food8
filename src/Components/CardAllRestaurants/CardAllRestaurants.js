import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { DivRestaurants, Text, Container, DivParaBorda, ImgRestaurants, DivReferencias, NomeRestaurants } from './Styled'
import Search from '../../Components/Search/Search'
import axios from 'axios'
import { useHistory } from 'react-router'

function CardAllRestaurants(props) {
    const restaurants = props.restaurants
    const history = useHistory()

    const goToRestaurant = (id) => {
        history.push(`/feed/${id}`)
    }

    const mapRestaurants = restaurants && restaurants.map((details) => {
        const sum = details.deliveryTime + 15

        return (
            <DivRestaurants onClick={() => goToRestaurant(details.id)}>
                <ImgRestaurants src={details.logoUrl}></ImgRestaurants>
                <DivParaBorda>
                    <NomeRestaurants>{details.name}</NomeRestaurants>
                    <DivReferencias>
                        <Text>{details.deliveryTime} - {sum} min </Text>
                        <Text>Frete: R${details.shipping},00</Text>
                    </DivReferencias>
                </DivParaBorda>


            </DivRestaurants>
        )
    })

    return (
        <Container>
            {mapRestaurants}
        </Container>
    );
}

export default CardAllRestaurants;