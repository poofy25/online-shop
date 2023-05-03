
import './navBarMenu.css'
import { useNavigate , useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import logedInIcon from '/src/assets/Icons/logedInProfileIcon.png'
import cartIcon from '/src/assets/Icons/cartIcon.png'
import contactUsIcon from '/src/assets/Icons/contactUsIcon.png'
import shoppingWoman from '/src/assets/Clothing/womanShopping.png'
import womanLooking from '/src/assets/Clothing/womanLooking.png'
import companyLogo from '/src/assets/Icons/companyLogo.png'
import facebookLogo from '/src/assets/Icons/facebookLogo.png'
import instagramLogo from '/src/assets/Icons/instagramLogo.png'


const NavBarMenu = (props)=>{
    const menuBtnHandler = props.closeMenu
    const navigateTo = useNavigate()
    const location = useLocation()
    const user = props.user

    useEffect(()=>{
      
      if(document.querySelector('.menuContainer.open')){
        console.log('changed locations')
      menuBtnHandler()
      }
    },[location])

    return(
    <div className="menuContainer">
      <div className="menuContainerShadow" onClick={menuBtnHandler}></div>
      <div className="menuContainerContent">
        <img className='menuCompanyLogo' src={companyLogo} onClick={()=>navigateTo('/')}/>
        <button className="menuHomeBtn menuBigBtn" onClick={()=>navigateTo('/')}>HOME <img src={womanLooking}/></button>
        <button className="menuCatalogBtn menuBigBtn" onClick={()=>navigateTo('/catalog')}>CATALOG <img src={shoppingWoman}/></button>


        <div className="menuSignInContainer">
          <a onClick={()=>navigateTo('/signin')}>Sign In</a>&nbsp; | &nbsp;<a onClick={()=>navigateTo('/signup')}>SignUp</a>
        </div>
        <button className="menuHomeBtn menuSmallBtn" onClick={()=>navigateTo('/account')}><img src={user!==null ? logedInIcon : logedOutIcon}/>Account</button>
        <button className="menuCartBtn menuSmallBtn" onClick={()=>navigateTo('/cart')}><img src={cartIcon}/>Cart</button>
        <button className="menuContactBtn menuSmallBtn" onClick={()=>navigateTo('/contact')}><img src={contactUsIcon}/>Contact Us</button>

        <div className="menuSocialsContainer">
          <img src={facebookLogo}/>
          <img src={instagramLogo}/>
        </div>
        <button className="menuCompanyInfoBtn" onClick={()=>navigateTo('/about')}>About dilVin</button>
      </div>
    </div>
    )
}
export default NavBarMenu