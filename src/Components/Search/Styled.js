import styled from "styled-components";


export const Icon = styled.img`
  position: absolute;
`
// export const ContainerSearch = styled.div`
//   width: 20.5rem;
//   height: 3.5rem;
//   padding: 1rem 0.503rem 1rem 1.063rem;
//   border-radius: 2px;
// `

export const InputSearch = styled.input`
  width: 20.5rem;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display:flex;
  align-items:center;
  margin-left:0.5rem;
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
  width: 22.5rem;
  height: 2.625rem;
  margin: 0.5rem 0 0;
  padding: 0.75rem 0 0.75rem 1rem;
  overflow:scroll;
  overflow-y: hidden;
  display:flex;
  justify-content:space-between;
  align-items:center;
`