import { auth , provider } from "../../../firebase/firebase"
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import './signIn.css'
import googleIcon from '/src/assets/Icons/googleIcon.png'

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
        navigate('/account')
        return console.log(userData)
       }).catch((error) => {
        console.log(error)
       })
}


  return (
    <div className="signInContainer">
      <p>SIGN IN WITH...</p>
       <button onClick={onSingIn} className="googleBtn">
        <img src={googleIcon}/>
        GOOGLE
        </button>
    </div>
  )
}

export default SignIn
