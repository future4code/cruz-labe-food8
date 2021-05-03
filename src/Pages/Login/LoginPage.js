import React, { useEffect, useContext } from 'react'
import { baseUrl } from '../../contants/urls'
import axios from 'axios';
import { initialForm } from "../../contants/inputs";
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToRegister } from '../../Router/coordinator'
import { useForm } from "../../Hooks/useForm";
import GlobalStateContext from '../../GlobalState/GlobalStateContext'

const LoginPage = () => {
  let { requests } = useContext(GlobalStateContext)
  const history = useHistory()
  const [form, onChange] = useForm(initialForm)

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      goToLogin(history)
    }
  }, [history])

  const login = async () => {
    const body = {
      'email': form.email,
      'password': form.password
    }

    try {
      const res = await axios.post(`${baseUrl}/login`, body)
      localStorage.setItem('token', res.data.token)
      goToFeed(history)
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)

    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    login()
  }


  return (
    <div>
      <h1>Acessar Conta </h1>
      <button onClick={requests.logout}>Logout</button>
      <form onSubmit={onSubmitForm}>
        <input
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
          title={"E-mail inválido"}
          required
        />
        <input
          type={'password'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          pattern={"\\w{6,}"}
          title={"A senha deve conter no mínimo 6 caracteres"}
          required
        />

        <button main>Entrar</button>
      </form>
      <form register> Novo por aqui? <p link onClick={() => goToRegister(history)}> Crie sua conta</p></form>
    </div>
  )


}

export default LoginPage;