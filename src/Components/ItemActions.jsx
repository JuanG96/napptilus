import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { increment } from '../cartSlice';

const ItemActions = ({ item }) => {
    const [attributes, setAttributes] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const attributesObj = Object.keys(item.options).reduce((acc, options) => {
            return acc = { ...acc, [options]: item.options[options][0] }
        }, {})
        setAttributes({ ...attributesObj })
    }, [item.options])

    const addToCart = () => {
        axios.post('https://itx-frontend-test.onrender.com/api/cart', {
            id: item.id,
            colorCode: attributes.colors.code,
            storageCode: attributes.storages.code,
        })
            .then(() => {
                dispatch(increment())
                localStorage.cart = (localStorage.cart | 0) + 1
                const cartItemsArr = (JSON.parse(localStorage.cartItems))
                cartItemsArr.push({ id: item.id, colorCode: attributes.colors.code, storageCode: attributes.storages.code })
                localStorage.cartItems = JSON.stringify(cartItemsArr)
            })
            .catch((err) => {
                console.log({ err })
            })
    }


    return (
        <>
            {
                attributes ?

                    <ActionDiv>
                        {
                            Object.keys(item.options).map((options) => {
                                return (
                                    <div key={options}>
                                        <form action="">
                                            <Fieldset id="group1">
                                                <AttributesTitle>{options.charAt(0).toUpperCase() + options.slice(1)}</AttributesTitle>
                                                <RadioDiv>
                                                    {
                                                        item.options[options].map((option) => {
                                                            return (
                                                                <div key={option.code}>
                                                                    <RadioInput type="radio" value={option.code} name={options} defaultChecked={option.code === item.options[options][0].code} onChange={(e) => setAttributes({ ...attributes, [options]: item.options[options].find(x => x.code === +e.target.value) })} />
                                                                    <span>{option.name}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </RadioDiv>
                                            </Fieldset>
                                        </form>
                                    </div>
                                )
                            })
                        }
                        <AddButton onClick={addToCart}>Añadir</AddButton>
                    </ActionDiv>
                    :
                    <></>
            }
        </>
    )
}

const ActionDiv = styled.div`
    width: 75%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &>* {
        margin-bottom: 10px;
        flex: 1 1 50%;
    }
    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;

const RadioInput = styled.input`
    accent-color: black;
    ~ span {
        font-weight: 500;
        color: black;
    }
    &:checked ~ span {
        color: black;
    }
`;

const RadioDiv = styled.div`
    display:flex;
    flex-direction: row;
`;

const Fieldset = styled.fieldset`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 0;
`;

const AttributesTitle = styled.h2`
    margin: 5px 0;
`;

const AddButton = styled.button`
    background-color: #4C6089;
    color: white;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
`;

export default ItemActions