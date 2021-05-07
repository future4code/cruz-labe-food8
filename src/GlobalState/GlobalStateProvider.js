import React, { useEffect, useState, } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import GlobalStateContext from "./GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/urls'
import { goToLogin, goToProfile } from "../Router/coordinator";
import { useForm } from "../Hooks/useForm";
import { initialForm } from "../Constants/inputs";
import useRequestData from '../Hooks/useRequestData'

const GlobalStateProvider = (props) => {
  const history = useHistory();
  // const [data] = useRequestData({}, `${baseUrl}/restaurants/`, axiosConfig)
  const [restaurants, setRestaurants] = useState()
  const [editProfile, setEditProfile] = useState({})
  const [editAddress, setEditAddress] = useState({})
  const [addressUpdated, setAddressUpdated] = useState("")
  const [form, onChange, resetForm] = useForm(initialForm)
  const [dataRestaurant, setDataRestaurant] = useState({})
  const [productsCategories, setProductsCategories] = useState([])
  const [product, setProduct] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [id, setId] = useState()
  const [order, setOrder] = useState({})

  useEffect(() => {
    getEditAddress()
    getRestaurants()
    getOrder()
  }, [cartProducts])

  const getRestaurants = async () => {
    try {
      const res = await axios.get(`${baseUrl}/restaurants/`, axiosConfig)
      setRestaurants(res.data.restaurants)
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    }
  }


  const getRestaurantDetail = async (restaurantId) => {
    try {
      const res = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, axiosConfig)
      setDataRestaurant(res.data.restaurant)
      setProduct(res.data.restaurant.products)
      getCategories()
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    }
  }

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const getCategories = () => {

    let categories = product && product

      .map((product) => {
        return product.category
      })
      .filter(onlyUnique)

    //       Object.getOwnPropertyNames()
    // includes
    setProductsCategories(categories)
  }

  const postOrder = async () => {
    const body = {
      products: cartProducts,
      paymentMethod: form.paymentMethod
    }
    try {
      await axios.post(`${baseUrl}/restaurants/${id}/order`, body, axiosConfig)
      alert("Pedido recebido, já está em preparo")
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    }
  }

  const getEditAddress = async () => {
    try {
      const response = await axios.get(`${baseUrl}/profile/address`, axiosConfig);
      setEditAddress(response.data.address)

    } catch (err) {
      alert(err.response.data.message)
    };
  }

  const logout = () => {
    window.localStorage.removeItem("token");
    goToLogin(history);
  };

  const putEditProfile = async (body, clear, history) => {

    try {
      const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
      setEditProfile(response.data.user)
      clear()
      goToProfile(history)
      console.log("requisitou")

    } catch (err) {
      alert(err.response.data.message)
    };
  }

  const putEditAddress = async (body, clear, history) => {

    try {
      const response = await axios.put(`${baseUrl}/address`, body, axiosConfig);
      setAddressUpdated(response.data.user.address)
      clear()
      goToProfile(history)
      console.log("requisitou")

    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    };
  }

  const addProduct = (id, product, quantity, idPath) => {
    const newCartList = [...cartProducts]

    if (quantity > 0) {
      product.map((product) => {
        if (id === product.id) {
          newCartList.push({
            id: product.id,
            product: product.name,
            price: product.price,
            photoUrl: product.photoUrl,
            description: product.description,
            quantity: Number(quantity),
          })
        }
      }

      )
    }

    setId(idPath);
    setCartProducts(newCartList);
  };

  const removeProduct = (id) => {
    const newCartList = cartProducts.filter(prod => {
      return prod.id !== id
    })
    setCartProducts(newCartList)
  }

  const getOrder = async () => {
    try {
      const res = await axios.get(`${baseUrl}/active-order`, axiosConfig)
      setOrder(res.data.order)
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    }
  }


  const states = { order, cartProducts, productsCategories, product, dataRestaurant, restaurants, editProfile, editAddress, addressUpdated };
  const setters = { setCartProducts, setEditProfile, setEditAddress, setAddressUpdated };
  const requests = { getOrder, removeProduct, addProduct, getCategories, getRestaurantDetail, postOrder, getRestaurants, logout, putEditProfile, putEditAddress };

  const baseData = { states, setters, requests };

  return (
    <div>
      <GlobalStateContext.Provider value={baseData}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
