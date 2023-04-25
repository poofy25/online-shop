
import './navBarMenu.css'
import { useNavigate } from 'react-router-dom'

const NavBarMenu = (props)=>{
    const menuBtnHandler = props.closeMenu
    const navigateTo = useNavigate()

    return(
    <div className="menuContainer">
      <div className="menuContainerShadow" onClick={menuBtnHandler}></div>
      <div className="menuContainerContent">
        <button className="menuHomeBtn menuBigBtn" onClick={()=>navigateTo('/')}>HOME</button>
        <button className="menuCatalogBtn menuBigBtn" onClick={()=>navigateTo('/catalog')}>CATALOG</button>


        <div className="menuSignInContainer">
          <a onClick={()=>navigateTo('/login')}>Sign In</a>&nbsp; | &nbsp;<a onClick={()=>navigateTo('/login')}>SignUp</a>
        </div>
        <button className="menuHomeBtn menuSmallBtn" onClick={()=>navigateTo('/account')}>Account</button>
        <button className="menuCartBtn menuSmallBtn">Cart</button>
        <button className="menuContactBtn menuSmallBtn">Contact Us</button>
        <div className="menuCompanyInfoBtn">About dilVin</div>
        <div className="menuSocialsContainer">Insta , Facebook , Snap</div>
      </div>
    </div>
    )
}
export default NavBarMenu