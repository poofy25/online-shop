import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import AccountPage from './pages/accountpage';
import CartPage from './pages/cartpage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/account" element={ <AccountPage/> } />
        <Route path="/cart" element={ <CartPage/> } />
      </Routes>
    </div>
  )
}

export default App
