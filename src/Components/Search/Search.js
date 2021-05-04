import React, { useState, useContext, useEffect } from 'react'
import { useForm } from "../../Hooks/useForm";
import { initialForm } from "../../Constants/inputs";
import { ButtonBack, InputSearch, ContainerSearch, ContainerTitle, Title } from './Styled'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function Search() {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { states } = useContext(GlobalStateContext)
    const restaurants = states.restaurants
    const [searchOpen, setSearchOpen] = useState(false)
    const [filter, setFilter] = useState(restaurants)

    const onClickCategory = (value) => {
        form.category = value
        setSearchOpen(true)
    }

    const onClickBack = () => {
        onClickCategory('')
        setSearchOpen(false)
    }

    const categoryOptions = restaurants && restaurants.map((restaurants) => {
        return (
            <button key={restaurants.id} onClick={() => onClickCategory(restaurants.category)}>{restaurants.category}</button>
        )
    })

    const sendForm = (e) => {
        e.preventDefault()
        filterName()
        resetForm()
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
                    return (form.category && restaurants.category.toLowerCase().includes(form.category.toLowerCase()))
                } else {
                    return restaurants
                }
            })

        return (
            setFilter(filtered)
        )
    }

    const Header = () => {

        if (searchOpen) {
            return (
                <ContainerTitle>
                    <ButtonBack onClick={() => onClickBack()}> ˂ </ButtonBack>
                    <Title>Busca</Title>
                </ContainerTitle>
            )
        } else {
            return (
                <>
                    <ContainerTitle>
                        <Title>Ifuture</Title>
                    </ContainerTitle>

                    <form onSubmit={sendForm}>

                        <input
                            type={"text"}
                            name={"inputSearch"}
                            value={form.inputSearch}
                            placeholder={"Restaurante"}
                            onChange={onChange}
                        >
                        </input>

                    </form>
                    {categoryOptions}
                </>
            )
        }

    }


    return (
        <div>
            {Header()}
        </div >
    )
}

export default Search
