import "./navbar.css"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";

import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import logedInIcon from '/src/assets/Icons/logedInProfileIcon.png'
import companyLogo from '/src/assets/Icons/companyLogo.png'
import cartIcon from '/src/assets/Icons/cartIcon.png'

import SearchBar from "./SearchBar";
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

    if (!hasOpened){
      hasOpened = true;
      document.querySelector(".menuContainer").classList.add("open")
      document.querySelector(".menuButton").classList.add("active")
      document.body.style.overflow = "hidden"
    } else {
      hasOpened = false;
      document.querySelector(".menuContainer").classList.remove("open")
      document.querySelector(".menuButton").classList.remove("active")
      document.body.style.overflow = "auto"
    }
}

useEffect(()=>{
  if (localStorage.getItem('cartNotification') === 'true') 
  document.querySelector('.navCartNotification').classList.add('active')
  const navBar = document.querySelector('.Navbar')
  let lastScrollHeight = 0
  window.addEventListener('scroll', (e)=>{
 

    if(document.documentElement.scrollTop > navBar.offsetHeight * 1.5 && !navBar.classList.contains('NavbarActive') && lastScrollHeight < document.documentElement.scrollTop){
     console.log(navBar.classList.contains('NavbarActive') , 'damn')
     navBar.classList.add('NavbarActive')
    }
     
    if (lastScrollHeight > document.documentElement.scrollTop && navBar.classList.contains('NavbarActive')){
      console.log(navBar.classList.contains('NavbarActive'))
      navBar.classList.remove('NavbarActive')
    }
    lastScrollHeight = document.documentElement.scrollTop
  })

  return ()=>{
  }

},[])



  return (
    <div className="Navbar">
      <div className="navBarTop">
        <button className='menuButton' onClick={menuBtnHandler}>
        <div className="menuButtonRow1"></div>
        <div className="menuButtonRow2"></div>
        <div className="menuButtonRow3"></div>
        </button>
    <div className="menuContainer">
      <div className="menuContainerShadow" onClick={menuBtnHandler}></div>
      <div className="menuContainerContent"></div>
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
              <div className="navCartNotification"></div>
              <img src={cartIcon}/>
            </button>
        </div>

        </div>
      </div>
        <SearchBar/>
    </div>
  )
}

export default Navbar
