import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="online-shop/" element={ <HomePage/> } />
        <Route path="online-shop/login" element={ <LoginPage/> } />
      </Routes>
    </div>
  )
}

export default App
