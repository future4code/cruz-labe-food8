import React,  { useContext, useEffect, useState} from "react";
import axios from 'axios'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import {useForm} from '../../Hooks/useForm'
import { goToProfile, goToLastPage } from "../../Router/coordinator";
import { useHistory } from "react-router";

function ProfileEditAddressPage() {
    useProtectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext);
   
    const [form, onChange, clear] = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        requests.putEditAddress(form, clear, history)
    }
    

    return (
        <div>
            <div>
                <button onClick={() => goToLastPage(history)}> voltar </button>
                <h4> Editar </h4>
            </div>
            <form onSubmit={onSubmitForm}>
                    <input
                        name={'street'}
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
                    <input
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
                    <input
                        name={"complement"}
                        value={form.apartment}
                        onChange={onChange}
                        label={"Complemento"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                        placeholder={"Complemento"}
                    />
                    <input
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
                    <input
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
                    <input
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
                    <button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    >
                    Salvar
                    </button>

            </form>
            
        </div>
    );
}

export default ProfileEditAddressPage;