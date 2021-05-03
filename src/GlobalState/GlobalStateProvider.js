import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/api'
import axios from 'axios';


const GlobalStateProvider = (props) => {
   
    useEffect(() => {
       
    }, [])

    const logout = () => {
        window.localStorage.removeItem("token");
        goToLogin(history);
    };


    const states = {  };
    const setters = {  };
    const requests = {  };

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