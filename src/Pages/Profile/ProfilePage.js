import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { baseUrl } from '../../Constants/urls'
import { goToProfileAddressEdit, goToProfileNameEdit } from "../../Router/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import useRequestData from '../../Hooks/useRequestData'
import EditIcon from '@material-ui/icons/Edit';
import * as S from "./Styled"
import { IconButton, Typography } from "@material-ui/core";
import { useStyles } from './Styled'

import Loading from '../../Components/Loading/Loading'


function ProfilePage() {
    useProtectedPage()
    const classes = useStyles();
    const history = useHistory();
    const { states } = useContext(GlobalStateContext);
    const profile = useRequestData({}, `${baseUrl}/profile/`)
    const user = profile[0].user
    const address = states.editAddress[0].address
    const historyOrders = useRequestData([], `${baseUrl}/orders/history`)
    const arrayOrders = historyOrders[0].orders

    useEffect(() => {

    }, [address, profile]);

    const renderPrice = (price) => {
        if (price % 1 === 0) {
            return (
                <S.Text bold>
                    SUBTOTAL R${price}.00
                </S.Text>
            )
        } else {
            return (
                <S.Text bold>
                   SUBTOTAL R${price}0
                </S.Text>
            )
        }
    }

    const listOrders =
        arrayOrders ? (
            arrayOrders.map((order) => {
                let date = new Date(order.createdAt)
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return (
                    <S.CardOrder>
                        <Typography className={classes.title} color='primary' variant="p" component="p">{order.restaurantName} </Typography>
                        <S.Date>{date.toLocaleDateString('pt-BR', options)}</S.Date>
                        {renderPrice(order.totalPrice)}
                    </S.CardOrder>
                )
            })
        ) : (<Loading />)

    return (
        <S.MainContainer>
            <S.Header>
                <S.HeaderTitle>Meu Perfil</S.HeaderTitle>
            </S.Header>
            <S.UserContainer>
                {user ? (
                    <S.UserData>
                        <S.Text>{user.name}</S.Text>
                        <S.Text>{user.email}</S.Text>
                        <S.Text>{user.cpf}</S.Text>
                    </S.UserData>)
                    : (<Loading />)}
                <IconButton onClick={() => goToProfileNameEdit(history)}>
                    <EditIcon />
                </IconButton>
            </S.UserContainer>

            <S.AddressContainer>
                <S.AddressData>
                <Typography className={classes.information} component="p"> Endereço Cadastrado </Typography>
                    {address ? (
                        <div>
                            <S.Text>{address.street},  {address.number}  - {address.neighbourhood}</S.Text>
                        </div>
                    ) : (<Loading />)}
                </S.AddressData>
                <IconButton onClick={() => goToProfileAddressEdit(history)}>
                    <EditIcon />
                </IconButton>

            </S.AddressContainer>

            <S.HistoryContainer>
            <Typography className={classes.historyTitle} component="p"> Histórico de Pedidos </Typography>
                <S.ListOrders> {listOrders} </S.ListOrders>
            </S.HistoryContainer>
        </S.MainContainer>
    );
}
export default ProfilePage;