import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/login/loginpage';
import AccountPage from './pages/account/accountpage';
import CartPage from './pages/cart/cartpage';
import ProductPage from './pages/productScreen/ProductScreen';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/account" element={ <AccountPage/> } />
        <Route path="/cart" element={ <CartPage/> } />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
