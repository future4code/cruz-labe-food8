import React, { useEffect, useState,  } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import GlobalStateContext from "./GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/urls'
import { goToLogin, goToProfile } from "../Router/coordinator";
import useRequestData from '../Hooks/useRequestData'

const GlobalStateProvider = (props) => {
  const history = useHistory();
  const [data] = useRequestData({}, `${baseUrl}/restaurants/`, axiosConfig)
  const restaurants = data.restaurants
  const [editProfile, setEditProfile] = useState({})
  const [editAddress, setEditAddress] = useState({})
  const [addressUpdated, setAddressUpdated] = useState("")


  const logout = () => {
    window.localStorage.removeItem("token");
    goToLogin(history);
  };

  const putEditProfile = async (body, clear, history) => {
    
    try {
        const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
        setEditProfile(response.data.user)
        clear()
        goToProfile(history)
        console.log("requisitou")
        
    } catch (err) {
        alert(err.response.data.message)
    };
  }

  const putEditAddress = async (body, clear, history) => {
     
    try {
        const response = await axios.put(`${baseUrl}/address`, body, axiosConfig);
        setAddressUpdated(response.data.user.address)
        clear()
        goToProfile(history)
        console.log("requisitou")
        
    } catch (err) {
        alert(err.response.data.message)
    };    
  }

  const states = {restaurants, editProfile, editAddress, addressUpdated};
  const setters = { setEditProfile, setEditAddress, setAddressUpdated};
  const requests = { logout, putEditProfile, putEditAddress};

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
