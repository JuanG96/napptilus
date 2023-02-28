import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/logo.png';

const Header = () => {
    const navigate = useNavigate()

    const count = useSelector((state) => state.cart.value)
    let { itemId } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        setItem(JSON.parse(localStorage.items).find(x => x.id === itemId))
    }, [itemId])

    return (
        <>
            <GeneralDiv>
                <MainDiv>
                    <LogoImg src={logo} alt="" onClick={() => navigate('/')} />
                    <div>
                        <HiOutlineShoppingCart size={42} color={'white'}></HiOutlineShoppingCart>
                        {count !== 0 || +localStorage.cart !== 0 ? <ProductCount>{count === 0 ? localStorage.cart : count}</ProductCount> : <></>}
                    </div>
                </MainDiv>
                {
                    itemId
                        ?
                        <BreadcrumbDiv>
                            <NewLink to="/">Principal</NewLink>
                            <BreadcrumbP>{'>'}</BreadcrumbP>
                            <BreadcrumbP>{item.model}</BreadcrumbP>
                        </BreadcrumbDiv>
                        :
                        <></>
                }
            </GeneralDiv>
        </>
    )
}

const GeneralDiv = styled.div`
    background-color: #5581F3;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 4%;
`;

const BreadcrumbDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #5581F3;
    padding-left: 10px;
    color: white;
`;

const BreadcrumbP = styled.p`
    margin: 4px;
`;

const NewLink = styled(Link)`
    color: white;
`;

const ProductCount = styled.span`
    font-size: 14px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
    border-radius: 50px;
`;


export default Header