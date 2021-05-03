import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { goToLogin } from "../Router/coordinator";

const GlobalStateProvider = (props) => {
  const history = useHistory();
  useEffect(() => {}, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    // goToLogin(history);
  };

  const states = {};
  const setters = {};
  const requests = { logout };

  const data = { states, setters, requests };

  return (
    <div>
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
