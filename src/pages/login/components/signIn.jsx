import { auth , provider } from "../../../firebase/firebase"
import { signInWithPopup , getAdditionalUserInfo} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../styles/signIn.css'
import googleIcon from '/src/assets/Icons/googleIcon.png'

function SignIn() {
 let navigate = useNavigate()


const onSingIn = ()=>{
    signInWithPopup(auth , provider).then((result) => {
        if(getAdditionalUserInfo(result).isNewUser)console.log('You shound sign up, not sign in')

        let email = result.user.email
        let name = result.user.displayName
  
        const userData = {
          userEmail:email,
          userName:name
        }
        localStorage.setItem("userName" , name)
              navigate('/account')
        return
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
