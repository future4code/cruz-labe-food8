import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import { useForm } from "../../Hooks/useForm";
import { goToProfile, goToLastPage } from "../../Router/coordinator";
import { useHistory } from "react-router";
import { initialForm } from '../../Constants/inputs'
import MenuBack from "../MenuBack"
import * as S from "../../Pages/Profile/Styled"
import {
    Button,
    TextField,
} from "@material-ui/core";

function EditAddress(props) {
    const onSubmitForm = props.onSubmitForm
    const [form, onChange] = useForm({ initialForm });

    return (
        <S.MainContainer>
            <MenuBack />
            <S.Title> {props.title} </S.Title>

            <S.StyledForm onSubmit={onSubmitForm}>

                <TextField
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    label={"Logradouro"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Rua"}
                />
                <TextField
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    label={"Número"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"number"}
                    placeholder={"Numero"}
                />
                <TextField
                    name={"complement"}
                    value={form.apartment}
                    onChange={onChange}
                    label={"Complemento"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"text"}
                    placeholder={"Complemento"}
                />
                <TextField
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    label={"Bairro"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Bairro"}
                />
                <TextField
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    label={"Cidade"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Cidade"}
                />
                <TextField
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    label={"Estado"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Estado"}
                />
                <Button type="submit" color="primary" variant="contained">
                    Salvar
      </Button>
            </S.StyledForm>
        </S.MainContainer>
    )
}
export default EditAddress