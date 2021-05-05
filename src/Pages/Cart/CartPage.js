import { Button } from "@material-ui/core";
import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import styled from "styled-components";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import ProductCard from "./ProductCard";

const exampleProducts = [
  {
    id: "CnKdjU6CyKakQDGHzNln",
    description: "Carne",
    price: 1,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
    name: "Bibsfiha carne",
    quantity: 10,
  },
  {
    id: "KJqMl2DxeShkSBevKVre",
    photoUrl:
      "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
    name: "Refrigerante",
    description: "Coca cola, Sprite ou Guaraná",
    price: 4,
    quantity: 10,
  },
  {
    id: "SmT6MYMm8QC8riHYApzt",
    name: "Batata Frita",
    description: "Batata frita crocante e sequinha.",
    price: 9.5,
    quantity: 10,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
  },
  {
    id: "V5VhD0xmsN7p1RvIDyhs",
    name: "Beirute",
    description: "",
    price: 22.9,
    quantity: 10,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
  },
  {
    id: "ZrZm51AIbZ26MVAifuaJ",
    name: "Pizza",
    description: "",
    price: 31.9,
    quantity: 10,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
  },
];

const MainContainer = styled.div`
  font-family: "Roboto";
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  border-bottom: 1px gray solid;
  padding: 15px;
  margin: 0px;
  font-family: "Roboto";
`;
const AdressContainer = styled.div`
  background-color: #eeeeee;
  color: gray;
  padding: 15px;

  p {
    color: black;
    font-weight: 500;
    margin-bottom: 0px;
  }
`;

const OrdersContainer = styled.div``;

const Payout = styled.div``;
const PayoutMethod = styled.div`
  p {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
`;
const Price = styled.p`
  color: red;
  font-weight: 600;
`;

function CartPage() {
  useProtectedPage();

  const totalValue = exampleProducts.reduce((total, product) => {
    return total + (product.price * product.quantity);
  },0);

  return (
    <>
      <Title>Meu carrinho</Title>
      <AdressContainer>
        Endereço de entrega
        <p>Rua Alessandra Viera, 42</p>
      </AdressContainer>
      <MainContainer>
        <OrdersContainer>
          <ProductCard data={exampleProducts[0]} />
          <ProductCard data={exampleProducts[1]} />
          <ProductCard data={exampleProducts[2]} />
          <ProductCard data={exampleProducts[3]} />
          <ProductCard data={exampleProducts[4]} />
        </OrdersContainer>
        <Payout>
          <PriceContainer>
            <p>SUBTOTAL</p>
            <Price>R${totalValue}</Price>
          </PriceContainer>
          <PayoutMethod>
            <p>Forma de pagamento</p>
          </PayoutMethod>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel
              value="cash"
              control={<Radio color="primary" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="credit"
              control={<Radio color="primary" />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </Payout>
        <Button color="primary" variant="contained">
          Confirmar
        </Button>
      </MainContainer>
    </>
  );
}

export default CartPage;
