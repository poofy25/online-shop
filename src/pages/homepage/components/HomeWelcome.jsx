

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'
import { useNavigate } from "react-router-dom"

function HomeWelcome() {
const navigateTo = useNavigate()

    const clickHandler = ()=>{
      navigateTo('/catalog/')
    }
    return (
        <div className="homeWelcomeContainer">
          <img
          src={welcomeImg}
          className="homeIMG"
          />
          <p>Shop the latest trends <br/> with dilVin</p>
          <button onClick={clickHandler}>Shop now</button>
        </div>
    )
}

export default HomeWelcome