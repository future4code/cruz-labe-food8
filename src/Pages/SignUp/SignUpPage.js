import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import logo_img from "../../Imgs/logo_red.png";
import { useForm } from "../../Hooks/useForm";
import InputMask from "react-input-mask";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../Constants/urls";
import MenuBack from "../../Components/MenuBack"
import { goToFeed } from "../../Router/coordinator";
import { useHistory } from "react-router-dom";
import * as S from "./Styled"

const SignUpPage = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, formHandle] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("A confirmação da senha está errada");
    }
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    };
    axios
      .post(`${baseUrl}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <S.MainContainer>
      <MenuBack />
      <S.Logo src={logo_img} />
      <S.Title>Cadastrar</S.Title>
      <S.StyledForm onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          name="name"
          label="Nome"
          placeholder="Nome e sobrenome"
          value={form.name}
          onChange={formHandle}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          value={form.email}
          onChange={formHandle}
          required
          type="email"
        />

        <InputMask
          mask="999.999.999-99"
          value={form.cpf}
          onChange={formHandle}
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

        <TextField
          variant="outlined"
          name="password"
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Mínimo de 6 caracteres"
          value={form.password}
          onChange={formHandle}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          variant="outlined"
          name="confirmPassword"
          label="Confirmar"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirme a senha anterior"
          value={form.confirmPassword}
          onChange={formHandle}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" color="primary" variant="contained">
          Criar
        </Button>
      </S.StyledForm>
    </S.MainContainer>
  );
};

export default SignUpPage;
