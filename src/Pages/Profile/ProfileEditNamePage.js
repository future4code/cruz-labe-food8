import React,  { useContext, useEffect, useState} from "react";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import {useForm} from '../../Hooks/useForm'
import { goToProfile, goToLastPage } from "../../Router/coordinator";
import { useHistory } from "react-router";
import InputMask from "react-input-mask";
import MenuBack from "../../Components/MenuBack"
import * as S from "./Styled"
import {
    Button,
    TextField,
  } from "@material-ui/core";


function ProfileEditNamePage() {
    useProtectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext);
   
    const [form, onChange, clear] = useForm({
        name: '',
        email: '',
        cpf: ''
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        requests.putEditProfile(form, clear, history)
    }
    

    return (
        <S.MainContainer>
            <MenuBack/>
            <S.Title> Editar </S.Title>
            <S.StyledForm onSubmit={onSubmitForm}>
                    <TextField
                        variant="outlined"
                        name="name"
                        label="Nome"
                        placeholder="Nome e sobrenome"
                        value={form.name}
                        onChange={onChange}
                        required
                        type="text"
                    />
                    <TextField
                        variant="outlined"
                        name="email"
                        label="E-mail"
                        placeholder="email@email.com"
                        value={form.email}
                        onChange={onChange}
                        required
                        type="email"
                    />

                    <InputMask
                        mask="999.999.999-99"
                        value={form.cpf}
                        onChange={onChange}
                        disabled={false}
                        maskChar="0"
                    >
                        {() => (
                            <TextField
                                variant="outlined"
                                name="cpf"
                                label="CPF"
                                placeholder="000.000.000-00"
                                required
                                type="text"
                            />
                        )}
                        </InputMask>
                        <Button type="submit" color="primary" variant="contained">
                        Salvar
                        </Button>

            </S.StyledForm>
            
        </S.MainContainer>
    );
}

export default ProfileEditNamePage;