import React,  { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { baseUrl, axiosConfig} from '../../Constants/urls'
import { goToProfileAddressEdit, goToProfileNameEdit } from "../../Router/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function ProfilePage() {
    useProtectedPage()
    const history = useHistory();
    const { states, setters, requests } = useContext(GlobalStateContext);
    const [historyOrders, setHistoryOrders] = useState({})
    const [profile, setProfile] = useState({})


    useEffect(() => {
        getProfile();
        getEditAddress();
        getHistoryOrders();
    }, [])

   const getProfile = async () => {

        try {
            const response = await axios.get(`${baseUrl}/profile`, axiosConfig);
            setProfile(response.data.user)
            
        } catch (err) {
            alert(err.response.data.message)
        };    
    }
    const getEditAddress = async () => {

        try {
            const response = await axios.get(`${baseUrl}/profile/address`, axiosConfig);
            setters.setEditAddress(response.data.address)
            
        } catch (err) {
            alert(err.response.data.message)
        };    
    }

    
    const getHistoryOrders = async () => {
        
        try {
            const response = await axios.get(`${baseUrl}/orders/history`, axiosConfig
            );
            setHistoryOrders(response.data.orders[0])
            
        } catch (err) {
            alert(err.response.data.message)
        };    
    }


    return (
        <div>
            <h3>Meu Perfil</h3>
            <div>
                <hr/>
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.cpf}</p>
                </div>
                <button onClick={() => goToProfileNameEdit(history)}> Editar </button>
                <hr/>
            </div>
            
            <div>
                <div>
                    <p>Endereço Cadastrado</p>
                    <p>{states.editAddress.street}, {states.editAddress.number} - {states.editAddress.neighbourhood}</p> 
                </div>
                <button onClick={() => goToProfileAddressEdit(history)}> Editar </button>
                <hr/>
            </div>
                
            <div>
                <p>{historyOrders.restaurantName}</p>
                <p>Valor Total: R${historyOrders.totalPrice}</p>
            </div>
 
        </div>
    );
}

export default ProfilePage;