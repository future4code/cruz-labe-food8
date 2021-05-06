import styled from "styled-components";

export const MainContainer = styled.div`
  height: 8rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  font-family: 'Roboto';
  margin: 10px 0px;
  position: relative;
  text-align:left;
`;

export const Image = styled.div`
  height: 100%;
  width: 120px;
  background-size: 200%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-position: center;
`;

export const Data = styled.div`
  padding: 0px 20px;
`;


export const Title = styled.p`
  color: #e8222e;
  size: 1rem;
  letter-spacing: -0.39px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 14px;
  color: gray;
`
export const TotalValue = styled.p`
  font-weight: 500;
  padding:0;
  margin: 0
`
export const DivTotalValue = styled.p`
  display: flex;
`

export const Quantity = styled.div`
  position: absolute;
  right: 0px;
  border: 1px solid #e8222e;
  color: #e8222e;
  padding: 5px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const RemoveButton = styled.div`
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
