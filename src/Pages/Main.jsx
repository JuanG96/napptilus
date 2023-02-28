import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import '../App.css';
import { setValue } from '../cartSlice';
import CardItem from "../Components/CardItem";
import Header from '../Components/Header';

function Main() {
  const [allItems, setAllItems] = useState([])
  const [filter, setFilter] = useState('')
  const [sliceState, setSliceState] = useState({ from: 0, to: 20 })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setValue(+localStorage.cart))
    if ((((Math.abs(new Date(localStorage.loadTime) - new Date())) / 1000) / 60) / 60 >= 1) {
      axios.get('https://itx-frontend-test.onrender.com/api/product')
        .then((res) => {
          localStorage.items = JSON.stringify(res.data)
        })
      localStorage.cart = 0
      localStorage.cartItems = JSON.stringify([])
      localStorage.loadTime = new Date()
    }
    setAllItems([...JSON.parse(localStorage.items)])
  }, [dispatch])



  return (
    <MainDiv className="App">
      <Header />
      <div>
        <SearchDiv>
          <SearchInput type="text" placeholder="Buscar" onChange={(e) => setFilter(e.target.value)} />
        </SearchDiv>

        <ListDiv>
          {
            allItems.filter((item) => (item.brand).toLowerCase().includes(filter.toLowerCase()) || (item.model).toLowerCase().includes(filter.toLowerCase())).slice(sliceState.from, sliceState.to).map((item) => {
              return (
                <CardItem item={item} key={item.id} />
              )
            })
          }
        </ListDiv>
        {sliceState.to !== allItems.length ? <LoadButton onClick={() => setSliceState((prev) => ({ from: 0, to: prev.to + 20 }))}>Cargar más</LoadButton> : <></>}
      </div>
    </MainDiv>
  );
}


const MainDiv = styled.div`
  height: 100%;
  background-color: #F7F9FA; 
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 20px;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  height: 35px;
  width: 20%;
  box-shadow: 2px 2px 6px rgba(0,0,0,.2),inset 1px 1px 2px hsla(0,0%,100%,.3);
  border: 1px solid rgba(0,0,0,.2);
  @media screen and (max-width: 1100px) {
    width: 25%;
  }
  @media screen and (max-width: 768px) {
    width: 35%;
  }
  @media screen and (max-width: 576px) {
    width: 45%;
  }
`;

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  &>* {
    margin-bottom: 10px;
    flex: 0 1 25%;
    @media screen and (max-width: 1100px) {
      flex: 0 1 33.3%;
    }
    @media screen and (max-width: 768px) {
      flex: 0 1 50%;
    }
    @media screen and (max-width: 576px) {
      flex: 0 1 100%;
    }
  }
`;

const LoadButton = styled.button`
  background-color: #4C6089;
  color: white;
  font-size: 24px;
  height: 50px;
  width: 20%;
  margin-bottom: 20px;
  border: none;
`;

export default Main;
