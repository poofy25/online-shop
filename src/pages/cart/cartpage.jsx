
import EmptyCart from "./components/emptyCart"
import CartProduct from "./components/cartProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
function CartPage() {
    const {value, setValue} = useContext(CartContext)
if (value.length <= 0 ) {
    return (
        <>
            <div className="websiteContent">
    
                <EmptyCart/>
    
            </div>
        </>
    )
} else {
    return (
        <>
        <div className="websiteContent">

            {value.map((productData , index)=>{
                return(
                  <CartProduct cartProductData={productData} key={index} productIndex={index}/>
                    )
            })}

        </div>
    </>
    )
}

return (<>nothing</>)

 
}

export default CartPage