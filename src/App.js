import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'


import NavBar from './NavBar';
import Home from './Home';
import Login from "./Login";
import Signin from "./SignIn";
import Cart from "./Cart";
import Orders from "./Orders";
import Logout from './Logout';
import SingleProduct from './SingleProduct';
import Protected from './Protected';
import CartProductInvoice from './CartProductInvoice';
import Header from './Header';




export default function App() {

    const [is_logged_in, set_is_logged_in] = useState(false)


    useEffect(function () {
        const IS_LOGGED_IN = localStorage.getItem('IS_LOGGED_IN')
        if (IS_LOGGED_IN != null) {
            set_is_logged_in(true)
        }
    }, [])


    return <BrowserRouter>
        <Header />
        <NavBar is_logged_in={is_logged_in}></NavBar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login set_is_logged_in={set_is_logged_in} />} />
            <Route path='/logout' element={<Logout set_is_logged_in={set_is_logged_in} />} />
            <Route path='/sigin' element={<Signin />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/invoice' element={<CartProductInvoice />} />
            <Route path='/product/:id' element={<SingleProduct is_logged_in={is_logged_in} />} />
        </Routes>
    </BrowserRouter>
}
