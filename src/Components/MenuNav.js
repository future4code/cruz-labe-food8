import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { goToCart, goToFeed, goToProfile } from "../Router/coordinator";
import home from "../Imgs/homepage.svg";
import avatar from "../Imgs/avatar.svg";
import cart from "../Imgs/shopping-cart.svg";

const Footer = styled.footer`
  width: 100vw;
  border-top: solid 0.5px;
  border-color: #b8b8b8;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 3.06rem;
`;
const DivIcons = styled.div`
  width: 7.5rem;
  height: 3.062rem;
  padding: 0.625rem 2.875rem 0.625rem 2.938rem;
`;
const GreyIcon = styled.img`
  filter: brightness(0) invert(0.5);
`;
const RedIcon = styled.img`
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
`;

function MenuNav(props) {
  const history = useHistory();

  const goFeed = () => {
    goToFeed(history);
  };

  const goCart = () => {
    goToCart(history);
  };

  const goProfile = () => {
    goToProfile(history);
  };

  return (
    <Footer>
      <DivIcons>
        {props.home ? <img src={home} onClick={goFeed}></img> : <GreyIcon src={home} onClick={goFeed}></GreyIcon>}
      </DivIcons>
      <DivIcons>
        {props.cart ? <RedIcon src={cart} onClick={goCart}></RedIcon> : <GreyIcon src={cart} onClick={goCart}></GreyIcon>}
      </DivIcons>
      <DivIcons>
        {props.profile ? <RedIcon src={avatar} onClick={goProfile}></RedIcon> : <GreyIcon src={avatar} onClick={goProfile}></GreyIcon>}
      </DivIcons>
    </Footer>
  );
}
export default MenuNav;
