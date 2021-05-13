import React from 'react'
import styled from 'styled-components'

const DivFiltro = styled.div `
  width: 22rem;
  height: 2.625rem;
  margin: 0.5rem ;
  padding: 0.75rem 0 0.75rem 1rem;
  overflow:scroll;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

function MenuFiltro (){

    return(
       <DivFiltro>
    Burguer
    <div>Asiática</div>
    <div>Massas</div>
    <div>Saudável</div>
    </DivFiltro> 
    )
    
}
export default MenuFiltro
