import styled from "styled-components";

export const Icon = styled.img`
  position: absolute;
  left: 1rem;
  top: 4.2rem;
`

export const InputSearch = styled.input`
  width: 19.4rem;
  height: 1.5rem;
  padding: 1.1rem 0.503rem 1rem 2.5rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display:flex;
  align-items:center;
  margin:0.5rem;
  color:#d0d0d0;
  font-size: 1rem;
  font-family: roboto;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: ${props => props.back ? "space-between" : 'center'};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`

export const Title = styled.h1`
  width: 2.813rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const ButtonBack = styled.button`
  background: none;
  border: none;
  width: 1.44rem;
  height: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  align-self: center; 
  
`
export const ContainerFilter = styled.div `
  width: 21rem;
  height: 1.5rem;
  margin: 0.5rem 0 0.5rem 1rem;
  padding: 0.75rem 0 0.75rem 1rem;
  overflow:scroll;
  overflow-y: hidden;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const ButtonOptions = styled.button `
  background: none;
  border: none;
  font-size: 1rem;
  font-family: Roboto;
  color:  ${props => props.red ? '#e8222e' : 'black'};
  font-weight:border-left;
`
export const ContainerFloat = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  background-color: #e8222e;
  width:24rem;
  height:7.37rem;
  top: 30rem;
  margin:0;
  padding: 0.688rem 0 4.25rem;
`

export const Text = styled.p`
  font-size: 1rem;
  color:#ffffff;
  letter-spacing: -0.39px;
  font-family: 'roboto';
  margin: 0.5rem 0;
`
export const TextName = styled.p`
  font-size: 1rem;
  color:black;
  letter-spacing: -0.39px;
  font-family: 'roboto';
  margin: 0.5rem 0;
  font-weight: ${props => props.subTotal ? 'bold' : ''};
`

export const ContainerImg = styled.div`
 flex-direction: row;
 margin: 0 1.5rem;
`
export const ContainerText = styled.div`
 flex-direction: column;
`