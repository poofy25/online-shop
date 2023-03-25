
import "../styles/toCartBtn.css"
import { useContext, useState } from "react"



function ToCartBtn(props) {

   const productCartData = ({...props?.productCartData , uniqueID:`${props?.productCartData.name}-${props?.productCartData.color}-${props?.productCartData.size}`})
   
  const clickHandler = (e)=>{
    if(props.productCartData.size === ''){
        if(document.querySelector(".productSizesContainer").classList.contains("open")){
            document.querySelector(".productSizesContainer").classList.remove("open")
        }else {
            document.querySelector(".productSizesContainer").classList.add("open")
        }
    } else {
      e.target.childNodes[0].classList.add('cartBtnAnimation')
     let localStorageCartProducts
     
   if (localStorage.getItem('cartProducts') === null) {
      localStorageCartProducts = []
   } else {
       localStorageCartProducts = JSON.parse(localStorage.getItem('cartProducts'))
   }
    
 //This checks if the item is already in the cart
     if(localStorageCartProducts.filter((product, index)=>{
            if (product?.uniqueID === productCartData?.uniqueID){
                console.log(localStorageCartProducts[index])
                localStorageCartProducts[index].amount += 1
            }
            return product?.uniqueID === productCartData?.uniqueID
     }).length > 0
        ){console.log('found pair')} else {
     localStorageCartProducts.unshift(productCartData)
     }

      localStorage.setItem('cartProducts' , JSON.stringify(localStorageCartProducts))
      localStorage.setItem('cartNotification' , true)
      document.querySelector('.navCartNotification').classList.add('active')

    }
  }

    return (
     <button className="toCartBtn" onClick={clickHandler}>
        <div className=""></div>
     </button>
    )
 
}

export default ToCartBtn