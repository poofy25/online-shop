import "./emptyCart.css"
import { useNavigate } from "react-router-dom"

function EmptyCart() {
    
    const navigate = useNavigate()
   const goShoppingHandler = ()=>{
       navigate("/")
   }

return (
     <div className="emptyCartContainer">
        <p className="emptyCartText">You have no items in cart.</p>
        <p>Dilvin has many articles that are waiting for you!</p>
        <button onClick={goShoppingHandler} className="goShoppingBtn">Go Shopping</button>
     </div>
)
 
}

export default EmptyCart