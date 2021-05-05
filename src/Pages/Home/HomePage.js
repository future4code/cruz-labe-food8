import styled from 'styled-components'
import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import { goToLogin, gotToLastPage } from '../../Router/coordinator';
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
const DivMaster = styled.div`
  background-color:#e8222e;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
const ImageInitial = styled.img`
  width:126px;
  height:65px;
`
const HomePage = () => {
  let { requests } = useContext(GlobalStateContext)
  const history = useHistory()
  const go = () => {
    goToLogin(history)
  }
  return (
    <DivMaster>
      <button onClick={() => requests.logout()}>Logout</button>
      <ImageInitial
        src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/BEEEAD31-8486-4A4B-AA8C-239F38A9FB65.svg'
        onClick={go}
      >
      </ImageInitial>
    </DivMaster>
  );
}
export default HomePage;