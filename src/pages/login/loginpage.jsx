

import LoginMenu from "./components/loginMenu"
import { serverTimestamp } from "firebase/firestore"
import { getDoc , doc , setDoc } from "firebase/firestore";
import { db , auth } from "../../firebase/firebase";
import { useNavigate , useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
function LoginPage(props) {
    const navigateTo = useNavigate()
    const [user] = useAuthState(auth);

    useEffect(()=>{
      if(user !== null) navigateTo('/account')
    },[user])
  
 
    
    useEffect(()=>{
       //This sets the user data when a user connects and syncs the cart content
      const onAuth =  auth.onAuthStateChanged(user =>{
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
         //  navigateTo('/account')
          }
          setCartDataFromDb()
        
      
      
      
      
      };
      onLogIn()
      }
      })
    
      //removes the event listener
      return onAuth
    },[])

    return (
        <>
            <div className="websiteContent">
            <LoginMenu path={props.path}/>
            </div>
        </>
    )
}

export default LoginPage