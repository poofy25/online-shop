
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useState , useEffect } from "react"
import { CartContext } from "../../context/CartContext"

function CartPage() {

    const [LSData , setLSData ] = useState(true)
  console.log(LSData)
  console.log(JSON.parse(localStorage.getItem('cartProducts')))

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

            {JSON.parse(localStorage.getItem('cartProducts')).map((productData , index)=>{
                console.log(productData , index)
                return(
                 <>
                 <p key={index + "key"}>Product Name: {productData.name}</p>
                  <CartProduct cartProductData={productData} key={index} productIndex={index} updateLS={setLSData} LSData={LSData}/>
                  
                </>
            )})}
        </div>
    </>
    )
 
}

export default CartPage