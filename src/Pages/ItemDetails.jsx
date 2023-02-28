import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Header from "../Components/Header";
import ItemActions from "../Components/ItemActions";
import ItemDescription from "../Components/ItemDescription";

const ItemDetails = () => {
    const [item, setItem] = useState();
    let { itemId } = useParams();
    useEffect(() => {
        axios.get(`https://itx-frontend-test.onrender.com/api/product/${itemId}`)
            .then(({ data }) => {
                setItem(data)
            })
    }, [itemId])
    return (
        <MainDiv>
            <Header />
            <ItemDiv>
                {
                    item ?
                        <>
                            <div>
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <RightDiv>
                                <ItemDescription item={item} />
                                <ItemActions item={item}></ItemActions>
                            </RightDiv>
                        </>
                        : <></>
                }
            </ItemDiv>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    min-height: 100vh;
    background-color: #ACACAC;
    padding-bottom: 30px;
`;

const ItemDiv = styled.div`
    width: 75%;
    margin-left: 12.5%;
    margin-top: 20px;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px grey;
    border-radius: 10px;
`;

const RightDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default ItemDetails