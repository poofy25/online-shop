import "./navbar.css"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect , lazy } from "react";

import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import logedInIcon from '/src/assets/Icons/logedInProfileIcon.png'
import companyLogo from '/src/assets/Icons/companyLogo.png'
import cartIcon from '/src/assets/Icons/cartIcon.png'

import SearchBar from "./SearchBar";
const NavBarMenu = lazy(()=> import("./navBarMenu"))
let hasOpened = false;

function Navbar() {
let navigate = useNavigate()
const [user] = useAuthState(auth)
const MobileUser = window.innerWidth <= 767

let accountIcon = logedOutIcon;
if(user){
  accountIcon = logedInIcon
}

const accountBtnHandler = ()=>{
   if(!user) navigate("/signin")
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
  let lastScrollUp = 0;
  let lastScrollDown = 0
  window.addEventListener('scroll', (e)=>{

    if (lastScrollHeight > document.documentElement.scrollTop ){
      lastScrollUp = document.documentElement.scrollTop
    }
    if ( lastScrollHeight < document.documentElement.scrollTop) {
      lastScrollDown = document.documentElement.scrollTop
    }
    if (lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight > document.documentElement.scrollTop && navBar.classList.contains('NavbarActive')){
      navBar.classList.remove('NavbarActive')
    }
    if(lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight < document.documentElement.scrollTop  && document.documentElement.scrollTop > navBar.offsetHeight ){
      navBar.classList.add('NavbarActive')
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
     {MobileUser && <NavBarMenu closeMenu={menuBtnHandler} user={user} /> }

        <div className="companyLogo">
          <button onClick={()=>{navigate('/')}} aria-label="Home">
            <img src={companyLogo} alt=''/>
          </button>
        </div>
        {!MobileUser && (<>
          <button className="desktopNavBtns" onClick={()=>{navigate('/catalog')}}>
          CATALOG          
        </button>
        <button className="desktopNavBtns" onClick={()=>{navigate('/contact')}} >
          CONTACT US         
        </button>
        </>)}
        {!MobileUser && <SearchBar/>}

        <div className="navBtns">
        <div className="accountBtn">
            <button onClick={accountBtnHandler} aria-label="Account">
              <img src={accountIcon} alt=''/>
            </button>
        </div>

        <div className="cartBtn">
            <button onClick={()=>{navigate('/cart')}} aria-label="Cart">
              <div className="navCartNotification"></div>
              <img src={cartIcon} alt=''/>
            </button>
        </div>

        </div>
      </div>
        {MobileUser && <SearchBar/>}
    </div>
  )
}

export default Navbar
