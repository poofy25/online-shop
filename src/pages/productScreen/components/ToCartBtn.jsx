
import "../styles/toCartBtn.css"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"


function ToCartBtn(props) {
 
   const {value , setValue} = useContext(CartContext)
   const productCartData = props.productCartData
   
  const clickHandler = ()=>{
    if(props.productCartData.size === ''){
        if(document.querySelector(".productSizesContainer").classList.contains("open")){
            document.querySelector(".productSizesContainer").classList.remove("open")
        }else {
            document.querySelector(".productSizesContainer").classList.add("open")
        }
    } else {

        if (value.lenght === 0){
            setValue([productCartData])
        } else {
    setValue([productCartData , ...value])
        }

    }
  }

    return (
     <button className="toCartBtn" onClick={clickHandler}>
      Add to cart
     </button>
    )
 
}

export default ToCartBtn