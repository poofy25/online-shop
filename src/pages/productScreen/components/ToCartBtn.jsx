
import "../styles/toCartBtn.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase/firebase";
import {doc , setDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore"
import { db } from "../../../firebase/firebase"


function ToCartBtn(props) {
  const [user] = useAuthState(auth)
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
                localStorageCartProducts[index].amount += 1
            }
            return product?.uniqueID === productCartData?.uniqueID
     }).length > 0
        ){} else {
     localStorageCartProducts.unshift(productCartData)
     }

      localStorage.setItem('cartProducts' , JSON.stringify(localStorageCartProducts))
      localStorage.setItem('cartNotification' , true)
      document.querySelector('.navCartNotification').classList.add('active')

      
      if (user){
              
        const userRef = doc(db , `users/${user.uid}`);
       async function writeData(){
           const docData = {
           cartItems: localStorageCartProducts,
           updatedAt:serverTimestamp()
           };
         
       try {
        await setDoc(userRef , docData , {merge:true})
       } catch (e) {
         console.error("Error adding document: ", e);
       }
      
     }
      writeData()
       };




    }
  }

    return (
     <button className="toCartBtn" onClick={clickHandler}>
        <div className=""></div>
     </button>
    )
 
}

export default ToCartBtn