import "../styles/emptyCart.css"
import { useNavigate } from "react-router-dom"
import emptyCartImg from '/src/assets/Images/emptyCartImage.png'


function EmptyCart() {
    
    const navigate = useNavigate()
   const goShoppingHandler = ()=>{
       navigate("/catalog")
   }
return (
     <div className="emptyCartContainer">
        <img src={emptyCartImg}/>
        <p className="emptyCartText">You have no items in cart.</p>
        <p>Dilvin has many articles that are waiting for you!</p>
        <button onClick={goShoppingHandler} className="goShoppingBtn">SHOP NOW</button>
     </div>
)
 
}

export default EmptyCart