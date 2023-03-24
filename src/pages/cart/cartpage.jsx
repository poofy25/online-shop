
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useState , useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import './styles/cartPage.css'

function CartPage() {

    const [LSData , setLSData ] = useState(JSON.parse(localStorage.getItem('cartProducts')))
     console.log("Rerendered Page")


    const cartAmountCalc = ()=>{
        let totalAmount = 0
        for(const productIndex in LSData){
           totalAmount += (LSData[productIndex].amount * (LSData[productIndex].discount ? LSData[productIndex].discount.price_after_discount : LSData[productIndex].price))
        }
        return totalAmount.toFixed(2)
    }
    const cartItemsAmountCalc = ()=>{
        let itemsAmount = 0
        for(const productIndex in LSData){
           itemsAmount += LSData[productIndex].amount
        }
        return itemsAmount
    }








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
                <p className="cartPageHeader">Your shopping cart</p>
                <div className="checkoutContainer">
                    <p className="checkoutItemsAmount">Items: <span>{cartItemsAmountCalc()}</span></p>
                    <p className="checkoutAmount">Subtotal: <span>${cartAmountCalc()}</span></p>
                    <button className="checkoutBtn">Checkout</button>
                </div>
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