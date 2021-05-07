import { Button } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  MainContainer,
  Title,
  AdressContainer,
  OrdersContainer,
  Payout,
  PayoutMethod,
  PriceContainer,
  Price,
  Restaurant,
  Shipping
} from './Styled'
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import ProductCart from "./ProductCart";
import { useForm } from "../../Hooks/useForm";
import axios from 'axios'
import {baseUrl, axiosConfig} from '../../Constants/urls'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { initialForm } from "../../Constants/inputs";


function CartPage() {
  useProtectedPage();
  const [form] = useForm(initialForm)
  const { states, requests } = useContext(GlobalStateContext)
  const { neighbourhood, number } = states.editAddress || {}
  const { shipping, name, logoUrl, category, address, deliveryTime } = states.dataRestaurant || {}
  const cartProducts = states.cartProducts
  const [paymentMethod, setPaymentMethod] = useState('money');

  const sendOrder = () => {
    requests.postOrder()
  }


  const totalValue = cartProducts.reduce((total, product) => {
    return total + (product.price * product.quantity) + shipping
  }, 0);

  const sumDeliveryTime = deliveryTime + 15

  const productsCards = () => {
    return (
      <>
        <Restaurant>
          <h4>{name}</h4>
          <p>{address}</p>
          <p>{deliveryTime} - {sumDeliveryTime} min</p>
        </Restaurant>
        <ProductCart paymentMethod={paymentMethod} />

      </>
    );
  }

  return (
    <>
      <Title>Meu carrinho</Title>
      <AdressContainer>
        Endereço de entrega
        <p>{neighbourhood}, {number}</p>
      </AdressContainer>
      <MainContainer>
        <OrdersContainer>
          {cartProducts.length
            ? productsCards()
            : "carrinho vazio"}
        </OrdersContainer>
        <Payout>
          <Shipping>
            <p>Frete R${shipping},00</p>
          </Shipping>
          <PriceContainer>
            <p>SUBTOTAL</p>
            <Price>R${totalValue.toFixed(2)}</Price>
          </PriceContainer>
          <PayoutMethod>
            <p>Forma de pagamento</p>
          </PayoutMethod>
          <RadioGroup value={form.paymentMethod = paymentMethod} onChange={(e) => { setPaymentMethod(e.target.value) }}>
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
        <Button onClick={() => { sendOrder() }} color="primary" variant="contained">
          Confirmar
        </Button>
      </MainContainer>
    </>
  );
}

export default CartPage
