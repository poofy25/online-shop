import "./navbar.css"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/firebase"

import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import logedInIcon from '/src/assets/Icons/logedInProfileIcon.png'
let hasOpened = false;

function Navbar() {
let navigate = useNavigate()

let accountIcon;
if(auth.currentUser === null){
  accountIcon = logedOutIcon
} else {
  accountIcon = logedInIcon
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

        <div className="companyLogo">Logo</div>
        <div className="accountBtn">
            <button onClick={()=>{navigate('/login')}}>
              <img src={accountIcon}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar
