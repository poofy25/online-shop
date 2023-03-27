
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useState , useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/firebase"
import {doc , setDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import './styles/cartPage.css'

function CartPage() {
    const [user] = useAuthState(auth)
    const [LSData , setLSData ] = useState(JSON.parse(localStorage.getItem('cartProducts')))
    localStorage.setItem('cartNotification' , false)

    

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


useEffect(()=>{
     return()=> {

        
            if (user){
              
               const userRef = doc(db , `users/${user.uid}`);
              async function writeData(){
                  const docData = {
                  cartItems: LSData,
                  updatedAt:serverTimestamp()
                  };
                
              try {
               await setDoc(userRef , docData , {merge:true})
              console.log("written" , LSData)
              } catch (e) {
                console.error("Error adding document: ", e);
              }
             
            }
             writeData()
              };
             
        console.log('unmounted')
    }
},[])





if (JSON.parse(localStorage.getItem('cartProducts')) === null || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
    return (
        <>
            <div className="websiteContent">
    
                <EmptyCart/>
    
            </div>
        </>
    )
}
document.querySelector('.navCartNotification').classList.remove('active')

    return (
        <>
        <div className="websiteContent">
            <div className="cartPage">
                <p className="cartPageHeader">Your shopping cart</p>
                <div className="checkoutContainer">
                    <p className="checkoutItemsAmount">Items: <span>{cartItemsAmountCalc()}</span></p>
                    <p className="checkoutAmount">Subtotal: <span>${cartAmountCalc()}</span></p>
                    <button className="checkoutBtn">CHECKOUT</button>
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