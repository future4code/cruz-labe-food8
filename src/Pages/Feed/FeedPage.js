import styled from 'styled-components';
import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import MenuFiltro from '../../Components/MenuFiltro';
//import MenuNav from '../../Components/MenuNav';


const Title = styled.p`
width: 2.813rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color:black;
  text-align:center;
` 
const Header = styled.header`
display:flex;
justify-content:center;

`
const DivInputFeed = styled.div `
 width: 20.5rem;
  height: 2rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display:flex;
  align-items:center;
  margin-left:0.5rem;
` 
const InputFeed =styled.input `
  width: 16.475rem;
  height: 1.125rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border:none;
  font-size:1rem;
`

const DivProducts = styled.div`
  background-color:blue;
  width: 22.5rem;
  height: 11.75rem;
  margin: 3.125rem 0 0;
  padding: 0.5rem 1rem 0;
`


function FeedPage() {
    useProtectedPage()


  


   return (
        <div>
            <Header>
                <Title>Ifuture</Title>
               
            </Header>
            <hr></hr>
            <DivInputFeed>
          
            <img src = 'https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2B6D2876-FB2A-4EF4-8B8D-5314BF50995F.svg'>  
            </img>
            <InputFeed
            placeholder = 'Restaurante'
            >    
            </InputFeed>
            </DivInputFeed>
            <MenuFiltro/>
            <DivProducts>

            </DivProducts>
       
        </div>
    );
}

export default FeedPage;