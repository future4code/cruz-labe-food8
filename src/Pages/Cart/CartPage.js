import { Button } from "@material-ui/core";
import React, { useState } from "react";
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
    quantity: 50,
  },
  {
    id: "KJqMl2DxeShkSBevKVre",
    photoUrl:
      "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
    name: "Refrigerante",
    description: "Coca cola, Sprite ou Guaraná",
    price: 4,
    quantity: 7,
  },
  {
    id: "SmT6MYMm8QC8riHYApzt",
    name: "Batata Frita",
    description: "Batata frita crocante e sequinha.",
    price: 9.5,
    quantity: 8,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
  },
  {
    id: "V5VhD0xmsN7p1RvIDyhs",
    name: "Beirute",
    description: "",
    price: 22.9,
    quantity: 2,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
  },
  {
    id: "ZrZm51AIbZ26MVAifuaJ",
    name: "Pizza",
    description: "",
    price: 31.9,
    quantity: 23,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
  },
];

const MainContainer = styled.div`
  font-family: "Roboto";
  padding: 20px;
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

const OrdersContainer = styled.div`
  text-align: center;
`;

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

const Restaurant = styled.div`
  text-align: left;
  h4{
    color: red;
    margin: 0px;
  }
  p{
    color: gray;
  }
`

function CartPage() {
  useProtectedPage();
  
  const [paymentMethod, setPaymentMethod] = useState('money');

  const totalValue = exampleProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const placeOrder = () => {

  }

  const productsCards = () => {
    return (
      <>
      <Restaurant>
        <h4>Bullger Vila Madalena</h4>
        <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
        <p>30 - 40 min</p>
      </Restaurant>
      {exampleProducts.map((product) => {
        return <ProductCard data={product} />;
      })}
      </>
    );
  }

  return (
    <>
      <Title>Meu carrinho</Title>
      <AdressContainer>
        Endereço de entrega
        <p>Rua Alessandra Viera, 42</p>
      </AdressContainer>
      <MainContainer>
        <OrdersContainer>
          {exampleProducts.length
            ? productsCards()
            : "carrinho vazio"}
        </OrdersContainer>
        <Payout>
          <PriceContainer>
            <p>SUBTOTAL</p>
            <Price>R${totalValue.toFixed(2)}</Price>
          </PriceContainer>
          <PayoutMethod>
            <p>Forma de pagamento</p>
          </PayoutMethod>
          <RadioGroup value={paymentMethod} onChange={(e)=>{setPaymentMethod(e.target.value)}}>
            <FormControlLabel
              value="money"
              control={<Radio color="primary" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio color="primary" />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </Payout>
        <Button onClick={placeOrder} color="primary" variant="contained">
          Confirmar
        </Button>
      </MainContainer>
    </>
  );
}

export default CartPage;
