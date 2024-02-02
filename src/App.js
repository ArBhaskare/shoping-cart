import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Cart from "./Cart";
import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { addData } from "./ProductSlice";

export default function App()
{
  const dispatch = useDispatch()
useEffect(()=>{
  loadData()
},[])

var loadData = async()=>{
  var response = await fetch("https://dummyjson.com/products")
  var data = await response.json()
 dispatch(addData(data.products))
}

  return <div className="container-fluet">
  <Menu/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/card" element={<Cart/>}/>
    <Route path="menu" element={<Menu/>} />

  </Routes>
  </div>
}