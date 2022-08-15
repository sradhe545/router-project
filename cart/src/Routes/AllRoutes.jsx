import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Component/Home';
import Login from '../Component/Login';
import Private from '../Component/Private';
import Products from '../Component/Products';
import Error from '../Component/Error';
import NewArrival from '../Component/NewArrival';
import EveryArrival from '../Component/EveryArrival';
import Apparel from '../Component/Apparel';
import Apothecary from '../Component/Apothecary';
import Cart from '../Component/Cart';
import ProductDesc from '../Component/ProductDesc';
const AllRoutes = () => {


  return (
    <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>}/>
            <Route path="/products" element={<Private><Products/></Private>}/>
            <Route path='/newarrival' element={<Private><NewArrival/></Private>}/>
            <Route path='/newarrival/:id' element={<Private><ProductDesc/></Private>}/>
            <Route path='/everyarrival' element={<Private><EveryArrival/></Private>}/>
            <Route path='/apparel' element={<Private><Apparel/></Private>}/>
            <Route path='/apothecary' element={<Private><Apothecary/></Private>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Private><Cart/></Private>}/>
            <Route path="*" element={<Error/>}/>

        </Routes>
        
    </div>
  )
}

export default AllRoutes