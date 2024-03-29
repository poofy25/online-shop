
import { Routes, Route } from "react-router-dom"
import { lazy } from 'react'
import React from 'react'
import { useState , useEffect } from "react"
import './App.css'
const HomePage = lazy(()=> import("./pages/homepage/homepage.jsx"))
const LoginPage = lazy(()=> import("./pages/login/loginpage"))
const AccountPage = lazy(()=> import("./pages/account/accountpage"))
const CartPage = lazy(()=> import("./pages/cart/cartpage"))
const ProductPage = lazy(()=> import("./pages/productScreen/ProductScreen"))
const CatalogPage = lazy(()=> import("./pages/catalog/Catalog"))
const CheckOutPage = lazy(()=> import("./pages/checkout/checkout.jsx"))
import Loading from "./components/loading/loading"
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {

  const [mobile, setMobile] = useState(window.innerWidth <= 767);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 767);
    console.log(window.innerWidth <= 767)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={ <React.Suspense fallback={<Loading/>}><HomePage/></React.Suspense> } />
        <Route path="/signup" element={ <React.Suspense fallback={<Loading/>}><LoginPage path='signup'/> </React.Suspense>} />
        <Route path="/signin" element={ <React.Suspense fallback={<Loading/>}><LoginPage path='signin'/> </React.Suspense>} />
        <Route path="/account" element={ <React.Suspense fallback={<Loading/>}><AccountPage/></React.Suspense> } />
        <Route path="/cart" element={ <React.Suspense fallback={<Loading/>}><CartPage/></React.Suspense> } />
        <Route path="/product/:id" element={<React.Suspense fallback={<Loading/>}><ProductPage /></React.Suspense>} />
       
        <Route path="/catalog" element={<React.Suspense fallback={<Loading/>}><CatalogPage /></React.Suspense>} />
        <Route path="/checkout" element={<React.Suspense fallback={<Loading/>}><CheckOutPage /></React.Suspense>} />

      </Routes>
               
      <Footer/>
     
    </>
  )
}

export default App
