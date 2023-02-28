import styled from "styled-components";

const ItemDescription = ({ item }) => {
    return (
        <>
            <ItemsDiv>
                <ItemAttribute><strong>Marca:</strong> {item.brand}</ItemAttribute>
                <ItemAttribute><strong>Modelo:</strong> {item.model}</ItemAttribute>
                <ItemAttribute><strong>Precio:</strong> {item.price === '' ? <strong>Sin precio</strong> : `${item.price}€`}</ItemAttribute>
                <ItemAttribute><strong>CPU:</strong> {item.cpu}</ItemAttribute>
                <ItemAttribute><strong>RAM:</strong> {item.ram}</ItemAttribute>
                <ItemAttribute><strong>Sistema operativo</strong>: {item.os}</ItemAttribute>
                <ItemAttribute><strong>Pantalla:</strong> {item.displayResolution}</ItemAttribute>
                <ItemAttribute><strong>Batería:</strong> {item.battery}</ItemAttribute>
                <ItemAttribute><strong>Cámara principal</strong>: {item.primaryCamera}</ItemAttribute>
                <ItemAttribute><strong>Cámara secundaria</strong>: {item.secondaryCmera}</ItemAttribute>
                <ItemAttribute><strong>Tamaño:</strong> {item.dimentions}</ItemAttribute>
                <ItemAttribute><strong>Peso:</strong> {item.weight}</ItemAttribute>
            </ItemsDiv>
        </>
    )
}

const ItemAttribute = styled.p`
    maring: 0 5px;
`;

const ItemsDiv = styled.div`
    width: 50%;
    display:flex;
    flex-wrap: wrap;
    &>* {
        margin-bottom: 10px;
        flex: 1 1 50%;
    }
`;

export default ItemDescription