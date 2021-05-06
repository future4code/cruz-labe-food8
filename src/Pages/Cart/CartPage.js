import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  MainContainer,
  Title,
  AdressContainer,
  OrdersContainer,
  Payout,
  PayoutMethod,
  PriceContainer,
  Price
} from './Styled'
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import ProductCart from "./ProductCart";
import { useForm } from "../../Hooks/useForm";
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { initialForm } from "../../Constants/inputs";

function CartPage() {
  useProtectedPage();
  const [form, onChange] = useForm(initialForm)
  const { states, requests } = useContext(GlobalStateContext)
  const { neighbourhood, number } = states.editAddress || {}
  const { shipping, name, logoUrl, category, address, deliveryTime } = states.dataRestaurant || {}
  const cartProducts = states.cartProducts

  const sendForm = (e) => {
    e.preventDefault()
  }

  const totalValue = cartProducts.reduce((total, product) => {
    return total + (product.price * product.quantity) + { shipping };
  }, 0);

  const renderPrice = () => {
    if (totalValue % 1 === 0) {
      return (
        <p>
          R${cartProducts.price}.00
        </p>
      )
    } else {
      return (
        <p>
          R${cartProducts.price}0
        </p>
      )
    }
  }

  const sumDeliveryTime = deliveryTime + 15

  const limpar = () => {
    window.localStorage.removeItem("cart");
  }

  return (
    <>
    <button onClick={() => {limpar()}}>Limpar local</button>
      <Title>Meu carrinho</Title>
      <AdressContainer>
        Endereço de entrega
        <p>{neighbourhood}, {number}</p>
      </AdressContainer>
      <MainContainer>
        {name ?
          <>
            <p>{name}</p>
            <p>{address}</p>
            <p>{deliveryTime} - {sumDeliveryTime} min</p>
            <OrdersContainer>
              <ProductCart paymentMethod={form.paymentMethod} />
            </OrdersContainer>
          </>
          : <p>Carrinho vazio</p>
        }
        <Payout>
          <p>Frete R${shipping},00</p>
          <PriceContainer>
            <p>SUBTOTAL</p>
            <Price>R${renderPrice()}</Price>
          </PriceContainer>
          <PayoutMethod>
            <p>Forma de pagamento</p>
          </PayoutMethod>
          <form onSubmit={sendForm}>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value={form.paymentMethod}
                onChange={onChange}
                control={<Radio color="primary" />}
                label="Dinheiro"
              />
              <FormControlLabel
                value={form.paymentMethod}
                onChange={onChange}
                control={<Radio color="primary" />}
                label="Cartão de crédito"
              />
            </RadioGroup>
          </form>
        </Payout>
        <Button color="primary" variant="contained">
          Confirmar
        </Button>
      </MainContainer>
    </>
  );
}

export default CartPage;
