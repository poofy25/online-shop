
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useState , useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth , db } from "../../firebase/firebase"
import {doc , setDoc ,  serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import './styles/cartPage.css'

function CartPage() {
    const [user] = useAuthState(auth)
    const navigateTo = useNavigate()

    const [LSData , setLSData ] = useState(JSON.parse(localStorage.getItem('cartProducts')))


    
    //Calcuates total products price
    const cartTotalPrice = ()=>{
        let totalAmount = 0
        for(const productIndex in LSData){
           totalAmount += (LSData[productIndex].amount * (LSData[productIndex].discount ? LSData[productIndex].discount.price_after_discount : LSData[productIndex].price))
        }
        return totalAmount.toFixed(2)
    }
    //Calcuates total products
    const cartTotalItems = ()=>{
        let itemsAmount = 0
        for(const productIndex in LSData){
           itemsAmount += LSData[productIndex].amount
        }
        return itemsAmount
    }

//Saves user data when component unmounts
useEffect(()=>{
    localStorage.setItem('cartNotification' , false)
    document.querySelector('.navCartNotification').classList.remove('active')
     return()=> {
    
            // if user is logged in and items in the cart where changed
            if (user && localStorage.getItem('cartProducts') !== JSON.stringify(LSData)){
              
            const userRef = doc(db , `users/${user.uid}`);
            async function writeDataToDb(){

                  const docData = {
                  cartItems: JSON.parse(localStorage.getItem('cartProducts')),
                  updatedAt:serverTimestamp()
                  };
                
                 try {
                   await setDoc(userRef , docData , {merge:true})
                 } catch (e) {
                   console.error("Error adding document: ", e);
                 }
             
            }

            writeDataToDb()

            };
            
     }
},[])




//if there are no items in cart
if (JSON.parse(localStorage.getItem('cartProducts')) === null || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
    return (
        <>
            <div className="websiteContent">
    
                <EmptyCart/>
    
            </div>
        </>
    )
}

//If there are items in cart
return (
        <>
        <div className="websiteContent">
            <div className="cartPage">
                <p className="cartPageHeader">Your shopping cart</p>
                <div className="checkoutContainer">
                    <p className="checkoutItemsAmount">Items: <span>{cartTotalItems()}</span></p>
                    <p className="checkoutAmount">Subtotal: <span>${cartTotalPrice()}</span></p>
                    <button className="checkoutBtn" onClick={()=>{if(user){navigateTo('/checkout')}else navigateTo('/signin')}}>CHECKOUT</button>
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