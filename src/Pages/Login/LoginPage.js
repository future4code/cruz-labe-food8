import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { baseUrl } from "../../Contants/urls";
import { useForm } from "../../Hooks/useForm";
import logo_img from "../../Imgs/logo_red.png";
import { goToRegister } from "../../Router/coordinator";

const MainContainer = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
`;

const Logo = styled.img`
  margin-top: 5.5rem;
  width: 6.5rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 30px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 20px;
`;

const Login = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [form, formHandle] = useForm({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/login`, { email: form.email, password: form.password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <MainContainer>
      <Logo src={logo_img} />
      <Title>Entrar</Title>

      <StyledForm onSubmit={onSubmit}>
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
        <Button type="submit" color="primary" variant="contained">
          Entrar
        </Button>
        <Button onClick={() => goToRegister(history)}>
          Não possui cadastro? clique aqui.
        </Button>
      </StyledForm>
    </MainContainer>
  );
};

export default Login;
