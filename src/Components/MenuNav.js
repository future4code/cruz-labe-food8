import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { goToCart, goToFeed, goToProfile } from "../Router/coordinator";

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

function MenuNav() {
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
        <img
          src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg"
          onClick={goFeed}
        ></img>
      </DivIcons>
      <DivIcons>
        <img
          src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg"
          onClick={goCart}
        ></img>
      </DivIcons>
      <DivIcons>
        <img
          src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg"
          onClick={goProfile}
        ></img>
      </DivIcons>
    </Footer>
  );
}
export default MenuNav;
