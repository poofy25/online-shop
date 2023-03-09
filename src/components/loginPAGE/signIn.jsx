import { auth , provider } from "../../firebase/firebase"
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
 let navigate = useNavigate()

const onSingIn = ()=>{
    signInWithPopup(auth , provider).then((result) => {
        let email = result.user.email
        let name = result.user.displayName
  
        const userData = {
          userEmail:email,
          userName:name
        }
        console.log(auth.currentUser)
        localStorage.setItem("userName" , name)
        navigate('/')
        return console.log(userData)
       }).catch((error) => {
        console.log(error)
       })
}


  return (
    <div className="signIn-container">
       <button onClick={onSingIn}>Sign in with Google</button>
    </div>
  )
}

export default SignIn
