import React, { useState, useEffect } from 'react'
import { quantity } from "../../Constants/options";
import { useForm } from "../../Hooks/useForm";
import { initialForm } from "../../Constants/inputs";

function CardRestaurant(props) {
    const { photoUrl, name, description, price } = props.product || {}
    const [form, onChange] = useForm(initialForm)
    const [selectedQuantity, setSelectedQuantity] = useState("")
    const [quantityAlert, setQuantityAlert] = useState(false)


    const openQuantity = () => {
        setQuantityAlert(true)
    }

    const sendForm = (e) => {
        e.preventDefault()
        setQuantityAlert(false)
    }

    const removeItem = () => {
        setSelectedQuantity(0)
    }

    const renderPrice = () => {
        if (price % 1 === 0) {
            return (
                <p>
                    R${price}.00
                </p>
            )
        } else {
            return (
                <p>
                    R${price}0
                </p>
            )
        }
    }

    const renderQuantity = () => {
        if (quantityAlert) {
            return (
                <>
                    <p> Selecione a quantidade desejada </p>
                    <form onSubmit={sendForm}>
                        <select
                            name={"quantity"}
                            value={form.quantity}
                            onChange={onChange}
                            required
                        >
                            <option value="" >0</option>
                            {quantity.map((quantity) => {
                                return <option value={quantity} key={quantity}>{quantity}</option>
                            })}
                        </select>
                        <button> ADICIONAR AO CARRINHO</button>
                    </form>
                </>
            )
        }
    }

    return (
        <div>
            <div>
                <img src={photoUrl} />
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>

                    {renderPrice()}

                    {selectedQuantity ? <button>{selectedQuantity}</button> : <></>}

                    {selectedQuantity ?
                        <button
                            onClick={removeItem}
                            borderColor={"#e02020"}
                            color={"#e02020"}
                        >
                            Remover
                    </button>
                        :
                        <button
                            onClick={openQuantity}
                            borderColor={"#5cb646"}
                            color={"#5cb646"}
                        >
                            Adicionar
                    </button>
                    }
                </div>
            </div>
            {renderQuantity()}
        </div>

    )
}
export default CardRestaurant