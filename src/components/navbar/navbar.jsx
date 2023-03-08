import "./navbar.css"
import { useNavigate } from "react-router-dom"


function Navbar() {
let navigate = useNavigate()


  return (
    <div className="Navbar">
        <div className="menuBtn">Menu</div>
        <div className="companyLogo">Logo</div>
        <div className="accountBtn">
            <button onClick={()=>{navigate('/login')}}>Account</button>
        </div>
    </div>
  )
}

export default Navbar
