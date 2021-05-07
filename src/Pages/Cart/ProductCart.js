import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import {
  MainContainer,
  Image,
  Data,
  Title,
  Description,
  TotalValue,
  Quantity,
  RemoveButton
} from './StyledCard'

const ProductCart = () => {
  const { states, requests } = useContext(GlobalStateContext)
  const cartProducts = states.cartProducts

  const totalValue = (product) => {
    const total = product.price * product.quantity
    return (<TotalValue>
      R${total.toFixed(2)}
    </TotalValue>)
  }

  const arrayIndex = () => {
      return cartProducts.map((cartProducts) => {
        return (
          <MainContainer key={cartProducts.id}>
            <Quantity>{cartProducts.quantity}</Quantity>
            <RemoveButton onClick={() => { requests.removeProduct(cartProducts.id) }} >Remover</RemoveButton>
            <Image style={{ backgroundImage: `url('${cartProducts.photoUrl}')` }} />
            <Data>
              <Title>{cartProducts.product}</Title>
              <Description>{cartProducts.description ? cartProducts.description : 'sem descrição'}</Description>
              {totalValue(cartProducts)}
            </Data>
            </MainContainer>
        )
      })
  }


  return (
    <>
      {arrayIndex()}
    </>
  )
};

export default ProductCart;
