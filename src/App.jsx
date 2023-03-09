import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import AccountPage from './pages/accountpage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/account" element={ <AccountPage/> } />
      </Routes>
    </div>
  )
}

export default App
