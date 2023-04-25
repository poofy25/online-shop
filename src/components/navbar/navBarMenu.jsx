
import './navBarMenu.css'
import { useNavigate } from 'react-router-dom'
import logedOutIcon from '/src/assets/Icons/logedOutProfileIcon.png'
import cartIcon from '/src/assets/Icons/cartIcon.png'
import contactUsIcon from '/src/assets/Icons/contactUsIcon.png'
import shoppingWoman from '/src/assets/Clothing/womanShopping.png'
import womanLooking from '/src/assets/Clothing/womanLooking.png'

const NavBarMenu = (props)=>{
    const menuBtnHandler = props.closeMenu
    const navigateTo = useNavigate()

    return(
    <div className="menuContainer">
      <div className="menuContainerShadow" onClick={menuBtnHandler}></div>
      <div className="menuContainerContent">
        <button className="menuHomeBtn menuBigBtn" onClick={()=>navigateTo('/')}>HOME <img src={womanLooking}/></button>
        <button className="menuCatalogBtn menuBigBtn" onClick={()=>navigateTo('/catalog')}>CATALOG <img src={shoppingWoman}/></button>


        <div className="menuSignInContainer">
          <a onClick={()=>navigateTo('/login')}>Sign In</a>&nbsp; | &nbsp;<a onClick={()=>navigateTo('/login')}>SignUp</a>
        </div>
        <button className="menuHomeBtn menuSmallBtn" onClick={()=>navigateTo('/account')}><img src={logedOutIcon}/>Account</button>
        <button className="menuCartBtn menuSmallBtn"><img src={cartIcon}/>Cart</button>
        <button className="menuContactBtn menuSmallBtn"><img src={contactUsIcon}/>Contact Us</button>
        <div className="menuCompanyInfoBtn">About dilVin</div>
        <div className="menuSocialsContainer">Insta , Facebook , Snap</div>
      </div>
    </div>
    )
}
export default NavBarMenu