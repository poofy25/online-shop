
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useState , useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import './styles/cartPage.css'

function CartPage() {

    const [LSData , setLSData ] = useState(JSON.parse(localStorage.getItem('cartProducts')))
     console.log("Rerendered Page")
if (JSON.parse(localStorage.getItem('cartProducts')) === null || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
    return (
        <>
            <div className="websiteContent">
    
                <EmptyCart/>
    
            </div>
        </>
    )
}

    return (
        <>
        <div className="websiteContent">
            <div className="cartPage">
            {LSData.map((productData , index)=>{
                return(
                  <CartProduct productData={productData} key={index} productIndex={index} updateLS={setLSData} LSData={LSData}/>
            )})}
           </div>
        </div>
    </>
    )
 
}

export default CartPage