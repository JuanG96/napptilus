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
                        <HiOutlineShoppingCart size={42}></HiOutlineShoppingCart>
                        {count !== 0 || +localStorage.cart !== 0 ? <ProductCount>{count === 0 ? localStorage.cart : count}</ProductCount> : <></>}
                    </div>
                </MainDiv>
                {
                    itemId
                        ?
                        <BreadcrumbDiv>
                            <Link to="/">Principal</Link>
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
    background-color: #808080;
    box-shadow: 0 2px 10px black;
`;

const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 6%;
`;

const BreadcrumbDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #8E8E8E;
    border-top: 1px solid #858585;
    padding-left: 10px;
`;
const BreadcrumbP = styled.p`
    margin: 4px;
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