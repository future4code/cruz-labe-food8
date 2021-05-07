import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../Hooks/useProtectedPage";
import React, { useEffect } from "react";
import MenuBack from "../../Components/MenuBack";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import { baseUrl } from "../../Constants/urls";
import { goToFeed } from "../../Router/coordinator";

const MainContainer = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 5.75rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 20px;
`;

const RegisterAddress = () => {
  useProtectedPage();

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${baseUrl}/profile/address`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        res.data.address && goToFeed(history);
      })
  }, []);


  const [form, formHandle] = useForm({
    street: "",
    city: "",
    state: "",
    number: "",
    complement: "",
    neighbourhood: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      street: form.street,
      city: form.city,
      state: form.state,
      number: form.number,
      complement: form.complement,
      neighbourhood: form.neighbourhood,
    };
    axios
      .put(`${baseUrl}/address`, body, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        alert("endereço cadastrado");
        goToFeed(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useProtectedPage();

  return (
    <MainContainer>
      <MenuBack />
      <Title>Meu endereço</Title>
      <StyledForm onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          name="street"
          label="Logradouro"
          placeholder="Rua / Av."
          value={form.street}
          onChange={formHandle}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="number"
          label="Número"
          placeholder="123"
          value={form.number}
          onChange={formHandle}
          required
          type="number"
        />

        <TextField
          variant="outlined"
          name="complement"
          label="Complemento"
          placeholder="Apto. / Bloco"
          value={form.complement}
          onChange={formHandle}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="neighbourhood"
          label="Bairro"
          placeholder="Recanto"
          value={form.neighbourhood}
          onChange={formHandle}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="city"
          label="Cidade"
          placeholder="Ipatinga"
          value={form.city}
          onChange={formHandle}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="state"
          label="Estado"
          placeholder="Minas Gerais"
          value={form.state}
          onChange={formHandle}
          required
          type="text"
        />

        <Button type="submit" color="primary" variant="contained">
          Salvar
        </Button>
      </StyledForm>
    </MainContainer>
  );
};
export default RegisterAddress;
