import React, { useState, useEffect, useContext } from 'react'
import { quantity } from "../../Constants/options";
import { useForm } from "../../Hooks/useForm";
import { initialForm } from "../../Constants/inputs";
import { useStyles, ButtonAdd, ContainerOpacity, Quantity, ContainerFloat, Select, ButtonAddCart } from './Styled'
import { Typography, CardContent, CardMedia, Card } from '@material-ui/core'
import GlobalStateContext from '../../GlobalState/GlobalStateContext';

function CardRestaurant(props) {
    const classes = useStyles();
    const { photoUrl, name, description, price, id } = props.product || {}
    const { requests, setters, states } = useContext(GlobalStateContext)
    const [form, onChange, resetForm] = useForm(initialForm)
    const [quantityAlert, setQuantityAlert] = useState(false)
    const cartProducts = states.cartProducts
    
    const openQuantity = () => {
        setQuantityAlert(true)
    }

    const sendForm = (e) => {
        e.preventDefault()
        // requests.postOrder(props.key)
        form.id = id
        requests.addProduct(props.product, form.quantity, props.restaurantId) 
        setQuantityAlert(false)
    }

    const removeItems = () => {
        resetForm()
        requests.removeProduct()
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
                <ContainerOpacity>
                    <ContainerFloat>
                        <Typography className={classes.quantity} component="p"> Selecione a quantidade desejada </Typography>
                        <form onSubmit={sendForm}>
                            <Select
                                name={"quantity"}
                                value={form.quantity}
                                onChange={onChange}
                                required
                            >
                                <option value="" >0</option>
                                {quantity.map((quantity) => {
                                    return <option value={quantity} key={quantity}>{quantity}</option>
                                })}
                            </Select>
                            <ButtonAddCart> ADICIONAR AO CARRINHO</ButtonAddCart>
                        </form>
                    </ContainerFloat>
                </ContainerOpacity>
            )
        }
    }

    return (
        <div>
            <Card className={classes.containerProducts}>
                <CardMedia
                    className={classes.mediaProduct}
                    image={photoUrl}
                    title={name}
                />
                <CardContent>
                    {form.quantity ? <Quantity remove quantity>{form.quantity}</Quantity> : <></>}
                    <Typography className={classes.titleProduct} color='primary' component="p">{name} </Typography>
                    <Typography className={classes.description} component="p">{description}</Typography>

                    <Typography className={classes.price} component="p">{renderPrice()}</Typography>



                    {form.quantity ?

                        <ButtonAdd remove onClick={removeItems}>
                            remover
                    </ButtonAdd>

                        :
                        <ButtonAdd onClick={openQuantity}>
                            adicionar
                    </ButtonAdd>
                    }

                </CardContent>
            </Card>
            {renderQuantity()}
        </div>

    )
}
export default CardRestaurant