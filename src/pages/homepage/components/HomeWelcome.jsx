

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'
import welcomeImg2 from '/src/assets/Images/homePageWelcome2.png'
import { useNavigate } from "react-router-dom"

function HomeWelcome() {
const navigateTo = useNavigate()
const MobileUser = window.innerWidth <= 767

    const clickHandler = ()=>{
      navigateTo('/catalog/')
    }
    return (
        <div className="homeWelcomeContainer">
          <img
          src={welcomeImg}
          className="homeIMG"
          />
          {!MobileUser &&  <img
          src={welcomeImg2}
          className="homeIMG"
          /> }
          <p>Shop the latest trends <br/> with dilVin</p>
          <button onClick={clickHandler}>SHOP NOW</button>
        </div>
    )
}

export default HomeWelcome