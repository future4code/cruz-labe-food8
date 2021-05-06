import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 8rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  font-family: 'Roboto';
  margin: 10px 0px;
  position: relative;
  text-align:left;
`;

const Image = styled.div`
  height: 100%;
  width: 120px;
  background-size: 200%;
  background-position: center;
`;

const Data = styled.div`
  padding: 0px 20px;
`;


const Title = styled.p`
  color: #e8222e;
  size: 1rem;
  letter-spacing: -0.39px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
  color: gray;
`
const TotalValue = styled.p`
  font-weight: 500;
`
const Quantity = styled.div`
  position: absolute;
  right: 0px;
  border: 1px solid #e8222e;
  padding: 5px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
`
const RemoveButton = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: 1px solid #e8222e;
  padding: 10px 20px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 12px;
  color: #e8222e;
`
const removeProduct = () => {
  alert('Função remover')
}

const ProductCard = (props) => {
  return (
    <MainContainer>
      <Quantity>{props.data.quantity}</Quantity>
      <RemoveButton onClick={removeProduct} >Remover</RemoveButton>
      <Image style={{backgroundImage: `url(${props.data.photoUrl})`}} />
      <Data>
        <Title>{props.data.name}</Title>
        <Description>{props.data.description ? props.data.description : 'sem descrição'}</Description>
        <TotalValue>R${(props.data.price * props.data.quantity).toFixed(2)}</TotalValue>
      </Data>
    </MainContainer>
  );
};

export default ProductCard;
