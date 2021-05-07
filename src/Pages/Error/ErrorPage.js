import React from 'react';
import * as S from './Styled'
const ErrorPage = () => {
  return(
    <S.MainContainer>
      <h2>404 - Página não encontrada!</h2>
      <S.Img src={"https://st.depositphotos.com/1814083/1768/v/600/depositphotos_17680877-stock-illustration-funny-pizza-delivery-boy-riding.jpg"} />
      <h2>Já saiu para entrega</h2>
    </S.MainContainer>
  );
}

export default ErrorPage;