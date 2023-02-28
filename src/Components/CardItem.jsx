import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardItem = ({ item }) => {
    const navigate = useNavigate()
    const clickedDiv = ({ id }) => {
        navigate(`item/${id}`)
    }
    return (
        <CardDiv>
            <InternalDiv onClick={() => clickedDiv({ id: item.id })}>
                <Image src={item.imgUrl} alt="" />
                <h3>{item.brand} {item.model.length > 13 ? `${item.model.slice(0, 13)}...` : item.model}</h3>
                <p>{item.price === '' ? <strong>Sin precio</strong> : `${item.price}€`}</p>
            </InternalDiv>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
`;

const InternalDiv = styled.div`
    width:100%;
    margin: 20px;
    padding-top: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    // box-shadow: 1px 2px 6px black;
    box-shadow: 0 0 6px rgba(0,0,0,.15);
`;

const Image = styled.img`
    width: 50%;
`;


export default CardItem