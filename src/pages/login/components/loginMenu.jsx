

import "../styles/login.css"
import { useNavigate } from "react-router-dom"
import { lazy } from "react"
const SignIn = lazy(()=> import("./signIn"))
const SignUp = lazy(()=> import("./signUp"))
const LoginComponents = {
    signin:<SignIn/>,
    signup:<SignUp/>
}

function LoginMenu(props) {
  const navigateTo = useNavigate()

     const currentContainerElement = LoginComponents[props.path]
  const loginBtnsHandler = (e)=>{
     navigateTo(`/${(e.target.attributes.container.value).toLowerCase()}`)
  }

  return (
    <div className="loginMenu">
        <div className="loginBtns">
            <button className={`${props.path == 'signin' && 'activeBtn'}`} onClick={loginBtnsHandler} container={'SignIn'}>SIGN IN</button>
            <button className={`${props.path == 'signup' && 'activeBtn'}`}  onClick={loginBtnsHandler} container={'SignUp'}>SIGN UP</button>
        </div>
        
        <div className="loginMenuContent">
   {currentContainerElement}
        </div>
    </div>
  )
}

export default LoginMenu
