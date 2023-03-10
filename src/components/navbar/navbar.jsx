import "./navbar.css"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import logedInIcon from '/src/assets/Icons/logedInProfileIcon.png'
import companyLogo from '/src/assets/Icons/companyLogo.png'
import cartIcon from '/src/assets/Icons/cartIcon.png'
let hasOpened = false;

function Navbar() {
let navigate = useNavigate()
const [user] = useAuthState(auth)


let accountIcon = logedOutIcon;
if(user){
  accountIcon = logedInIcon
}

const accountBtnHandler = ()=>{
   if(!user) navigate("/login")
   if(user) navigate("/account")
}

const menuBtnHandler = ()=>{

    if (hasOpened === false){
      hasOpened = true;
      console.log("Open");
      document.querySelector(".menuContainer").classList.add("open")
    } else {
      hasOpened = false;
      console.log("Close")
      document.querySelector(".menuContainer").classList.remove("open")
    }
}




  return (
    <div className="Navbar">
        <button className='menuButton' onClick={menuBtnHandler}>
        <div className="menuButtonRow1"></div>
        <div className="menuButtonRow2"></div>
        <div className="menuButtonRow3"></div>
        </button>
    <div className="menuContainer">
    </div>

        <div className="companyLogo">
          <button onClick={()=>{navigate('/')}}>
            <img src={companyLogo}/>
          </button>
        </div>

        <div className="navBtns">
        <div className="accountBtn">
            <button onClick={accountBtnHandler}>
              <img src={accountIcon}/>
            </button>
        </div>
        <div className="cartBtn">
            <button onClick={()=>{navigate('/cart')}}>
              <img src={cartIcon}/>
            </button>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar
