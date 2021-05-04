import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { StyledForm, MainContainer, Logo, Title} from './Styled'
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { baseUrl } from "../../Constants/urls";
import { useForm } from "../../Hooks/useForm";
import { goToFeed, goToRegister } from "../../Router/coordinator";
import logo_img from "../../Imgs/logo_red.png";

const LoginPage = () => {
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
        goToFeed(history)
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
export default LoginPage;

