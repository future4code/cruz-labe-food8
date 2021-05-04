import React, { useEffect, useState,  } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "./GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/urls'
import { goToLogin } from "../Router/coordinator";
import useRequestData from '../Hooks/useRequestData'

const GlobalStateProvider = (props) => {
  const history = useHistory();
  const [data] = useRequestData({}, `${baseUrl}/restaurants/`, axiosConfig)
  const restaurants = data.restaurants


  const logout = () => {
    window.localStorage.removeItem("token");
    goToLogin(history);
  };

  const states = {restaurants};
  const setters = {};
  const requests = { logout };

  const baseData = { states, setters, requests };

  return (
    <div>
      <GlobalStateContext.Provider value={baseData}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
