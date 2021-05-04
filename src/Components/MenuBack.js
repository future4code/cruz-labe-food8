import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import { useHistory } from 'react-router';
import { goToLastPage } from "../Router/coordinator";


const MainContainer = styled.div`
  width: 100vw;
  position: fixed;
  height: 4rem;
  border-bottom: 1px solid rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
`;

const MenuBack = () => {
  const history = useHistory();
  return <MainContainer>
    <IconButton onClick={()=>goToLastPage(history)}>
      <ArrowBackIosIcon />
    </IconButton>
  </MainContainer>;
};

export default MenuBack;
