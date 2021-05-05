import React, { useContext, useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import {DivProducts} from './Styled'
import Search from '../../Components/Search/Search'

import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const DivRestaurants = styled.div`
width:327px;
margin-left:1.5rem;
padding-bottom:8px;
`
const DivParaBorda = styled.div`
border:solid 1px;
border-radius:8px;
margin-top:-18px;
border-color:#b8b8b8;
padding:12px;
height:125px;
`
const ImgRestaurants = styled.img`
width:328px;
height:160px;
border-radius:8px;
border-bottom:solid;

`
const DivReferencias = styled.div`
display:flex;
justify-content:space-between;
color:#b8b8b8;
`
const NomeRestaurants = styled.p`
font-size:20px;
padding-top:32px;
font-family:Roboto-Regular;
color:#e8222e;
box-sizing:border-box;
`


function FeedPage() {
    useProtectedPage()

    const token = window.localStorage.getItem('token')

    const [restaurantes, setRestaurantes] = useState([])    

useEffect(()=>{
getRestaurants()
},[])

const getRestaurants = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/restaurants`,{
        headers:{
            auth:token
        }
    }).then((res)=>{
        setRestaurantes(res.data.restaurants)
      
    }).catch((e)=>{
        console.log(e)
    })
}
console.log(restaurantes)

const history = useHistory()

const goToRestaurant = (id) => {
    history.push(`/feed/${id}`)
}


const mapRestaurantes = restaurantes.map((details)=>{
    const soma = details.deliveryTime + 15

    return(
        <DivRestaurants onClick = {() => goToRestaurant(details.id)}>
            <ImgRestaurants src = {details.logoUrl}></ImgRestaurants>
        <DivParaBorda>
            <NomeRestaurants>{details.name}</NomeRestaurants> 
           <DivReferencias>
               <p>{details.deliveryTime} - {soma} min </p>
               <p>Frete: R${details.shipping},00</p>
           </DivReferencias>
        </DivParaBorda>  
           
        
        </DivRestaurants>
    ) 
})

   return (
        <div>
            <Search/>

           
           
               {mapRestaurantes}
            
        </div>
    );
}

export default FeedPage;