import "../styles/emptyCart.css"
import { useNavigate } from "react-router-dom"
import emptyCartImg from '/src/assets/Images/emptyCartImage.png'
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
function EmptyCart() {
    

    const {value, setValue} = useContext(CartContext)
    const navigate = useNavigate()
   const goShoppingHandler = ()=>{
       navigate("/")
   }
    console.log(value)
return (
     <div className="emptyCartContainer">
        <img src={emptyCartImg}/>
        <p className="emptyCartText">You have no items in cart.</p>
        <p>Dilvin has many articles that are waiting for you!</p>
        <button onClick={goShoppingHandler} className="goShoppingBtn">Go Shopping</button>
     </div>
)
 
}

export default EmptyCart