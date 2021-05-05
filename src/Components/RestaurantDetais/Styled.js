import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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
  margin-left:${props => props.restaurant ? '-5rem' : ''}
`;

export const ButtonBack = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  align-self: center; 
`
export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonAdd = styled.button`
    width: 90px;
    height: 31px;
    margin-left: 8.7rem;
    margin-top: -2.3rem;
    background-color: transparent;
    border: solid 1px ${props => props.remove ? '#e02020' : 'black'};
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: ${props => props.remove ? '#e02020' : 'black'};
    position: absolute;
`
export const Quantity = styled.p`
    border: solid 1px #e02020;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #e02020;
    padding: 0.3rem 0.6rem;
    margin-left:12.48rem;
    margin-top: -1rem;
    position: absolute;
`
export const ContainerOpacity = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 2;
`

export const ContainerFloat = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20.5rem;
  height: 9rem;
  top: 20%;
  left: 2.5%;
  margin: 1.688rem 1rem 1.813rem;
  padding: 0.688rem 0 4.25rem;
  background-color: #ffffff;
`

export const Select = styled.select`
  width: 18.5rem;
  height: 3.5rem;
  margin: 0.563rem 1rem 0;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-family: Roboto;
  border: solid 1px #b8b8b8;
`

export const ButtonAddCart = styled.button`
  color: #4f81a8;
  font-size: 1rem;
  background: none;
  margin-top: 2rem;
  margin-left: 6rem;
  border: none;
`

export const useStyles = makeStyles({
  root: {
    margin: '0',
    boxShadow: 'none',
  },
  media: {
    width: '20.5rem',
    height: '7.5rem',
    margin: '1.063rem 1rem 0.75rem',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: '-0.39px',
  },
  information: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    letterSpacing: '-0.39px',
    paddingTop: '0.3rem',
    paddingRight: '2rem',
    color: '#b8b8b8',
  },
  address: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    letterSpacing: '-0.39px',
    color: '#b8b8b8',
  },
  categoryTitle: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    marginTop: '0',
    letterSpacing: '-0.39px',
    color: '#00000',
    fontWeight: 'bold',
    margin: '1rem',
    borderBottom: 'solid 1px black'
  },
  description: {
    fontSize: '0.75rem',
    fontFamily: 'roboto',
    letterSpacing: '-0.29px',
    marginTop: '0.3rem',
    color: '#b8b8b8',
  },
  titleProduct: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: '-0.39px',
  },
  price: {
    fontSize: '1rem',
    marginTop: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: '-0.39px',
    color: '#00000',
  },
  mediaProduct: {
    width: '6rem',
    height: '7rem',
  },
  containerProducts: {
    display: 'flex',
    margin: '1rem',
    boxShadow: 'none',
    height: '7rem',
    border: 'solid 1px gray',
    borderRadius: '9px',
  },
  quantity: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    marginTop: '2rem',
    letterSpacing: '-0.39px',
    color: '#00000',
    fontWeight: 'bold',
    margin: '1rem',
  },
});