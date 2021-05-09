import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router";
import { useForm } from "../../Hooks/useForm";
import { initialForm } from "../../Constants/inputs";
import { ContainerImg, ContainerText, Text, TextName, Icon, ButtonBack, InputSearch, ButtonOptions, HeaderContainer, Title, ContainerFilter } from './Styled'
import back from '../../Imgs/back.png'
import { axiosConfig, baseUrl } from '../../Constants/urls';
import axios from 'axios'
import CardAllRestaurants from '../CardAllRestaurants/CardAllRestaurants'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { ContainerFloat } from './Styled'
import clock from '../../Imgs/clock.png'

function Feed(props) {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { states, requests } = useContext(GlobalStateContext)
    const restaurants = props.restaurants
    const [searchOpen, setSearchOpen] = useState(false)
    // const [products, setProducts] = useState([])
    // const [productsName, setProductsName] = useState([])
    const [filter, setFilter] = useState()
    const { expiresAt, restaurantName, totalPrice } = states.order || {}
    let date = new Date(expiresAt)
    const actual = new Date()

    useEffect(() => {
        inicialStateFilter()
        requests.getOrder()
    }, [states.order])

    const inicialStateFilter = () => {
        if (form.inputSearch === '') {
            setFilter(props && props.restaurants)
        }
    }

    const onClickCategory = (value) => {
        form.category = value
        filterName()
        setSearchOpen(true)
    }

    const onClickBack = () => {
        onClickCategory('')
        setSearchOpen(false)
    }

    const categoryOptions = restaurants && restaurants.map((restaurants) => {
        return (
            <>
                {!searchOpen ? <ButtonOptions key={restaurants.id} onClick={() => onClickCategory(restaurants.category)}>{restaurants.category}</ButtonOptions> :
                    (form.category === restaurants.category ?
                        <ButtonOptions red key={restaurants.id} onClick={() => onClickCategory(restaurants.category)}>{restaurants.category}</ButtonOptions>
                        : <ButtonOptions key={restaurants.id} onClick={() => onClickCategory(restaurants.category)}>{restaurants.category}</ButtonOptions>
                    )
                }
            </>
        )
    })

    const sendForm = (e) => {
        e.preventDefault()
        filterName()
        // filterProduct()
        resetForm()
        setSearchOpen(true)
    }

    const filterName = () => {

        const filtered = restaurants

            .filter((restaurants) => {
                if (form.inputSearch) {
                    return (form.inputSearch && restaurants.name.toLowerCase().includes(form.inputSearch.toLowerCase()))
                } else {
                    return restaurants
                }
            })

            .filter((restaurants) => {
                if (form.category) {
                    return (form.category && restaurants.category.includes(form.category))
                } else {
                    return restaurants
                }
            })

        return (
            setFilter(filtered)
        )
    }


    // const getProducts = async () => {
    //     try {
    //         if (restaurants) {
    //             for (let id = 1; id < restaurants.length; id++) {
    //                 const res = await axios.get(`${baseUrl}/restaurants/${id}`, axiosConfig)
    //                 setProducts(products.push(res.data.restaurant.products))
    //                 for (let i = 0; i <= products.length; i++) {
    //                     setProductsName(productsName.push(res.data.restaurant.products[i]))
    //                 }
    //                 console.log(productsName)
    //             }
    //         }
    //     } catch (err) {
    //         alert(`❌ ${err.response.data.message}`)
    //     }
    // }
    // console.log(productsName)
    // const filterProduct = () => {
    //     getProducts()
    //     for (let i = 0; i <= products.length; i++) {
    //         const filtered = productsName

    //             .filter((products) => {
    //                 if (form.inputSearch) {

    //                     console.log('aqui')
    //                     return (form.inputSearch && products[i].name.toLowerCase().includes(form.inputSearch.toLowerCase()))

    //                 } else {
    //                     console.log('aqui nao')
    //                     return restaurants
    //                 }
    //             })

    //         return (
    //             setFilter(filtered)
    //         )
    //     }
    // }

    // console.log(filter)

    const renderOrder = () => {
        if (restaurantName) {
            return (
                <ContainerFloat>
                    <ContainerImg>
                        <img src={clock} alt='relógio' />
                    </ContainerImg>
                    <ContainerText>
                        <Text>Pedido em andamento</Text>
                        <TextName>{restaurantName}</TextName>
                        <TextName subTotal>SUBTOTAL  R${totalPrice.toFixed(2)}</TextName>
                    </ContainerText>
                </ContainerFloat>
            )
        }
    }

    const Render = () => {

        if (searchOpen) {
            return (
                <>
                    <HeaderContainer back>
                        <ButtonBack onClick={() => onClickBack()}> <img src={back} alt='back' /> </ButtonBack>
                        <Title>Busca</Title>
                        <p></p>
                    </HeaderContainer>

                    <ContainerFilter>
                        {categoryOptions}
                    </ContainerFilter>
                </>
            )
        } else {
            return (
                <>
                    <HeaderContainer>
                        <Title>Ifuture</Title>
                    </HeaderContainer>
                    <div>
                        <form onSubmit={sendForm}>
                            <Icon src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2B6D2876-FB2A-4EF4-8B8D-5314BF50995F.svg' alt="search" />

                            <InputSearch
                                type={"text"}
                                name={"inputSearch"}
                                value={form.inputSearch}
                                placeholder={"Restaurante"}
                                onChange={onChange}
                            >
                            </InputSearch>

                        </form>
                    </div>
                    <ContainerFilter>
                        {categoryOptions}
                    </ContainerFilter>
                </>
            )
        }

    }

    return (
        <div>
            {Render()}
            <CardAllRestaurants
                restaurants={filter}
            />
            {actual === date ? '' : (renderOrder())}
            {renderOrder()}

        </div>
    )
}

export default Feed
