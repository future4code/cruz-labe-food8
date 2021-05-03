import React, { useState, useEffect } from 'react'
import { baseUrl, axiosConfig } from '../contants/urls'
import axios from 'axios';
import { useForm } from "../Hooks/useForm";
import { initialForm } from "../contants/inputs";

function Search() {
    const [form, onChange, resetForm] = useForm(initialForm)
    const [rest, setRest] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = async () => {
        try {
            const res = await axios.get(`${baseUrl}/restaurants`, axiosConfig)
            setRest(res.data)
            console.log(res.data)
        } catch (err) {
            alert(`❌ ${err.response.data.message}`)
        }
    }

    const categoryOptions = rest.map((cat) => {
        return (
            <button key={cat.id} value={cat.category}>{cat.category}</button>
        )
    })

    const sendForm = (e) => {
        e.preventDefault()
        filterName()
        resetForm()
    }

    const filterName = () => {

        const filtered = rest

            .filter((rest) => {
                if (form.inputSearch) {
                    return (form.inputSearch && rest.name.toLowerCase().includes(form.inputSearch.toLowerCase()) || form.inputSearch && rest.name.toLowerCase().includes(form.inputSearch.toLowerCase()) )
                } else {
                    return (rest)
                }
            })

        return (
            filtered
        )
    }

    return (
        <div>
            <form onSubmit={sendForm}>
                {/* <select
                    name={"order"}
                    value={form.order}
                    onChange={onChange}
                >
                    <option value="" disabled>Ordenar</option>
                    {options.map((options) => {
                        return <option value={options} key={options}>{options}</option>
                    })}
                </select> */}

                <input
                    type={"text"}
                    name={"inputSearch"}
                    value={form.inputSearch}
                    placeholder={"Pesquisa por nome "}
                    onChange={onChange}
                >
                </input>
            </form>
        </div >
    )
}

export default Search
