import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Roboto";
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  border-bottom: 1px gray solid;
  padding: 15px;
  margin: 0px;
  font-family: "Roboto";
`;
export const AdressContainer = styled.div`
  background-color: #eeeeee;
  color: gray;
  padding: 15px;

  p {
    color: black;
    font-weight: 500;
    margin-bottom: 0px;
  }
`;

export const OrdersContainer = styled.div``;

export const Payout = styled.div``;

export const PayoutMethod = styled.div`
  p {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
`;
export const Price = styled.p`
  color: red;
  font-weight: 600;
`;

