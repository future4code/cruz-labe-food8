import React,  { useContext, useEffect, useState} from "react";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import {useForm} from '../../Hooks/useForm'
import { goToProfile, goToLastPage } from "../../Router/coordinator";
import { useHistory } from "react-router";


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
        <div>
            <div>
                <button onClick={() => goToLastPage(history)}> voltar </button>
                <h4> Editar </h4>
            </div>
            <form onSubmit={onSubmitForm}>
                    <input
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                        placeholder={"Nome"}
                    />
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                        placeholder={"E-mail"}
                    />
                    <input
                        name={"cpf"}
                        value={form.cpf}
                        onChange={onChange}
                        label={"CPF"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"number"}
                        placeholder={"CPF"}
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

export default ProfileEditNamePage;