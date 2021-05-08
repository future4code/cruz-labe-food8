import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { baseUrl, axiosConfig } from '../../Constants/urls'
import { goToProfileAddressEdit, goToProfileNameEdit } from "../../Router/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import useRequestData from '../../Hooks/useRequestData'
import EditIcon from '@material-ui/icons/Edit';
import * as S from "./Styled"
import { IconButton } from "@material-ui/core";

import Loading from '../../Components/Loading/Loading'


function ProfilePage() {
    useProtectedPage()
    const history = useHistory();
    const { states, setters, requests } = useContext(GlobalStateContext);
    const profile = useRequestData({}, `${baseUrl}/profile/`, axiosConfig)
    const user = profile[0].user
    const address = states.editAddress[0].address
    const historyOrders = useRequestData([], `${baseUrl}/orders/history`, axiosConfig)
    const arrayOrders = historyOrders[0].orders
    
    useEffect(() => {

    }, [address, profile]);

    const listOrders =
        arrayOrders ? (
            arrayOrders.map((order) => {
                return (
                    <div>
                        <hr />
                        <p>{order.restaurantName}</p>
                        <p>Valor Total: R${order.totalPrice}</p>
                        <hr />
                    </div>

                )
            })
        ) : (<Loading />)

    return (
        <S.MainContainer>
            <S.Header>
                <S.Title>Meu Perfil</S.Title>
                <hr />
            </S.Header>
            <S.UserContainer>
                {user ? (

                    <S.UserData>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.cpf}</p>
                    </S.UserData>)
                    : (<Loading />)}
                <IconButton onClick={() => goToProfileNameEdit(history)}>
                    <EditIcon />
                </IconButton>
            </S.UserContainer>

            <S.AddressContainer>
                <S.AddressData>
                    <h4>Endereço Cadastrado</h4>
                    {address ? (
                        <div>
                            <p>{address.street},  {address.number}  - {address.neighbourhood}</p>
                        </div>
                    ) : (<Loading />)}
                </S.AddressData>
                <IconButton onClick={() => goToProfileAddressEdit(history)}>
                    <EditIcon />
                </IconButton>

            </S.AddressContainer>

            <S.HistoryContainer>
                <p>Histórico de Pedidos</p>
                <S.ListOrders> {listOrders} </S.ListOrders>.

            </S.HistoryContainer>

        </S.MainContainer>
    );
}

export default ProfilePage;