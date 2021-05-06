import React from "react";
import { useHistory } from "react-router";
import { goToCart, goToFeed, goToProfile } from "../../Router/coordinator";
import {Footer, DivIcons, GreyIcon} from './Styled'
import home from "../../Imgs/homepage.svg";
import avatar from "../../Imgs/avatar.svg";
import cart from "../../Imgs/shopping-cart.svg";

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
        {props.cart ? <img src={cart} onClick={goCart}></img> : <GreyIcon src={cart} onClick={goCart}></GreyIcon>}
      </DivIcons>
      <DivIcons>
        {props.profile ? <img src={avatar} onClick={goProfile}></img> : <GreyIcon src={avatar} onClick={goProfile}></GreyIcon>}
      </DivIcons>
    </Footer>
  );
}
export default MenuNav;
