import React, { useEffect, useState, } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import GlobalStateContext from "./GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/urls'
import { goToHome, goToProfile } from "../Router/coordinator";
import { useForm } from "../Hooks/useForm";
import { initialForm } from "../Constants/inputs";
import useRequestData from '../Hooks/useRequestData'

const GlobalStateProvider = (props) => {
  const history = useHistory();
  const getRestaurants = useRequestData([], `${baseUrl}/restaurants`)
  const restaurants = getRestaurants[0].restaurants
  const [editProfile, setEditProfile] = useState({})
  const editAddress = useRequestData({}, `${baseUrl}/profile/address`)
  const [addressUpdated, setAddressUpdated] = useState("")
  const [form] = useForm(initialForm)
  const [dataRestaurant, setDataRestaurant] = useState({})
  const [productsCategories, setProductsCategories] = useState([])
  const [product, setProduct] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [id, setId] = useState()
  const [order, setOrder] = useState({})

  useEffect(() => {
    getOrder()
  }, [cartProducts, axiosConfig, editAddress])

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

    return setProductsCategories(categories)
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

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  };

  const putEditProfile = async (body, clear, history) => {

    try {
      const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
      setEditProfile(response.data.user)
      clear()
      goToProfile(history)

    } catch (err) {
      alert(err.response.data.message)
    };
  }

  const putEditAddress = async (body, clear) => {

    try {
      const response = await axios.put(`${baseUrl}/address`, body, axiosConfig);
      setAddressUpdated(response.data.user.address)
      clear()
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
      if (window.localStorage.getItem('token')) {
        const res = await axios.get(`${baseUrl}/active-order`, axiosConfig)
        setOrder(res.data.order)
      } else { goToHome(history) }
    } catch (err) {
      alert(`❌ ${err.response.data.message}`)
    }
  }


  const states = { order, cartProducts, productsCategories, product, dataRestaurant, restaurants, editProfile, editAddress, addressUpdated };
  const setters = { setCartProducts, setEditProfile, setAddressUpdated };
  const requests = { getOrder, removeProduct, addProduct, getCategories, getRestaurantDetail, postOrder, logout, putEditProfile, putEditAddress };

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
