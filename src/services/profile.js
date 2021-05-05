import axios from "axios"
import React,  { useContext, useEffect, useState } from "react";
import { baseUrl, axiosConfig } from "../constants/urls"
import { goToProfile } from '../routes/coordinator'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

// export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
//     setIsLoading(true)
//     axios.post(`${B}/user/login`, body)
//         .then((res) => {
//             localStorage.setItem("token", res.data.token)
//             clear()
//             setIsLoading(false)
//             goToRecipesList(history)
//             setRightButtonText("Logout")
//         })
//         .catch((err) => {
//             setIsLoading(false)
//             alert(err.response.data.message)
//         })
// }

// export const putEditAddress = async (body, clear, history) => {
     
//     try {
//         const response = await axios.put(`${baseUrl}/address`, body, axiosConfig);
//         setTestAddress(response.data.user.address)
//         clear()
//         goToProfile(history)
//         console.log("requisitou")
        
//     } catch (err) {
//         alert(err.response.data.message)
//     };    
//   }
// const putEditProfile = async (body, clear, history) => {
    
//     try {
//         const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
//         setEditProfile(response.data.user)
//         clear()
//         goToProfile(history)
//         console.log("requisitou")
        
//     } catch (err) {
//         alert(err.response.data.message)
//     };    
//   }

  export const getEditAddress = async () => {
    const { states, setters, requests } = useContext(GlobalStateContext);
    try {
        const response = await axios.get(`${baseUrl}/profile/address`, axiosConfig);
        setters.setEditAddress(response.data.address)
        
    } catch (err) {
        alert(err.response.data.message)
    };    
  }