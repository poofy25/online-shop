import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { lazy } from 'react'
import React from 'react'
import './App.css'
import { CartContext } from './context/CartContext'

const HomePage = lazy(()=> import("./pages/homepage/homepage.jsx"))
const LoginPage = lazy(()=> import("./pages/login/loginpage"))
const AccountPage = lazy(()=> import("./pages/account/accountpage"))
const CartPage = lazy(()=> import("./pages/cart/cartpage"))
const ProductPage = lazy(()=> import("./pages/productScreen/ProductScreen"))

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {

const [value , setValue] = useState([])


  return (
    <>
                <CartContext.Provider value={{value , setValue}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <React.Suspense fallback="Loading..."><HomePage/></React.Suspense> } />
        <Route path="/login" element={ <React.Suspense fallback="Loading..."><LoginPage/> </React.Suspense>} />
        <Route path="/account" element={ <React.Suspense fallback="Loading..."><AccountPage/></React.Suspense> } />
        <Route path="/cart" element={ <React.Suspense fallback="Loading..."><CartPage/></React.Suspense> } />
        <Route path="/product/:id" element={<React.Suspense fallback="Loading..."><ProductPage /></React.Suspense>} />
      </Routes>
               
      <Footer/>
      </CartContext.Provider>
    </>
  )
}

export default App
