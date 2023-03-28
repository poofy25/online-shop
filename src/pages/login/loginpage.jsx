

import LoginMenu from "./components/loginMenu"
import { serverTimestamp } from "firebase/firestore"
import { getDoc , doc , setDoc } from "firebase/firestore";
import { db , auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigateTo = useNavigate()
    auth.onAuthStateChanged(user =>{
        if (user && user.displayName !== localStorage.getItem('userName')){

         async function onLogIn (){
           const userRef = doc(db , `users/${user.uid}`);
          async function writeData(){
              const docData = {
              uid: user.uid,
              name:user.displayName,
              email:user.email,
              updatedAt:serverTimestamp(),
      
      
      
              };
            
          try {
           await setDoc(userRef , docData , {merge:true})
           console.log("Loged in and sent data to db" , docData)
      
          } catch (e) {
            console.error("Error adding document: ", e);
          }
         
        }
        await writeData()
      
      
          async function setCartDataFromDb(){
           const docData = await getDoc( doc(db, `users/${user.uid}`))
           const cartDataFromDb = docData.data()
           if(cartDataFromDb.cartItems !== undefined){
               localStorage.setItem('cartProducts' , JSON.stringify(cartDataFromDb.cartItems))
              
           }
           navigateTo('/account')
          }
          setCartDataFromDb()
        
      
      
      
      
      };
      onLogIn()
      }
      })
    
    return (
        <>
            <div className="websiteContent">
            <LoginMenu/>
            </div>
        </>
    )
}

export default LoginPage