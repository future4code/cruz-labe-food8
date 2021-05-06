import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import {MainContainer,
  Image,
  Data,
  Title,
  Description,
  TotalValue,
  Quantity,
  RemoveButton} from './StyledCard'

const ProductCard = () => {
  const {states, requests} = useContext(GlobalStateContext)
  const cartProducts = states.cartProducts

  return (
    <MainContainer>
      <Quantity>{cartProducts.quantity}</Quantity>
      <RemoveButton onClick={() => { requests.removeProduct()}} >Remover</RemoveButton>
      <Image style={{backgroundImage: `url(${cartProducts.photoUrl})`}} />
      <Data>
        <Title>{cartProducts.name}</Title>
        <Description>{cartProducts.description ? cartProducts.description : 'sem descrição'}</Description>
        <TotalValue>R${cartProducts.price * cartProducts.quantity}</TotalValue>
      </Data>
    </MainContainer>
  );
};

export default ProductCard;
