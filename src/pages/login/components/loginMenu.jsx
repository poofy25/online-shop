import SignIn from "./signIn"
import SignUp from "./signUp"
import "../styles/login.css"
import { useState } from "react"

const LoginComponents = {
    SignIn:<SignIn/>,
    SignUp:<SignUp/>
}

function LoginMenu() {

   const [currentLoginBtn , setLoginBtn] = useState(LoginComponents.SignIn)

  const loginBtnsHandler = (e)=>{
     document.querySelector(".activeBtn").classList.remove("activeBtn")
     e.target.classList.add("activeBtn")
     setLoginBtn(LoginComponents[e.target.attributes.container.value])
  }

  return (
    <div className="loginMenu">
        <div className="loginBtns">
            <button className="activeBtn" onClick={loginBtnsHandler} container={'SignIn'}>SIGN IN</button>
            <button onClick={loginBtnsHandler} container={'SignUp'}>SIGN UP</button>
        </div>
        
        <div className="loginMenuContent">
   {currentLoginBtn}
        </div>
    </div>
  )
}

export default LoginMenu
