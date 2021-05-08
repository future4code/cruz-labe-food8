import { useHistory } from "react-router-dom";
import useProtectedPage from "../../Hooks/useProtectedPage";
import React, { useEffect, useContext } from "react";
import MenuBack from "../../Components/MenuBack";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import { baseUrl } from "../../Constants/urls";
import { goToLogin } from "../../Router/coordinator";
import { MainContainer, Title, StyledForm } from './Styled'
import { initialForm } from '../../Constants/inputs'
// import EditAddress from '../../Components/EditAddress'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'

const RegisterAddress = () => {
  useProtectedPage();
  const history = useHistory();
  const { requests } = useContext(GlobalStateContext);

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/profile/address`, {
  //       headers: { auth: localStorage.getItem("token") },
  //     })
  //     .then((res) => {
  //       res.data.address && goToFeed(history);
  //     })
  // }, []);

  const [form, onChange, clear] = useForm({
    street: "",
    city: "",
    state: "",
    number: "",
    complement: "",
    neighbourhood: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // requests.putEditAddress(form, clear, history);
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
        goToLogin(history)
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    
  };

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
          onChange={onChange}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="number"
          label="Número"
          placeholder="123"
          value={form.number}
          onChange={onChange}
          required
          type="number"
        />

        <TextField
          variant="outlined"
          name="complement"
          label="Complemento"
          placeholder="Apto. / Bloco"
          value={form.complement}
          onChange={onChange}
          type="text"
        />

        <TextField
          variant="outlined"
          name="neighbourhood"
          label="Bairro"
          placeholder="Recanto"
          value={form.neighbourhood}
          onChange={onChange}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="city"
          label="Cidade"
          placeholder="Ipatinga"
          value={form.city}
          onChange={onChange}
          required
          type="text"
        />

        <TextField
          variant="outlined"
          name="state"
          label="Estado"
          placeholder="Minas Gerais"
          value={form.state}
          onChange={onChange}
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
