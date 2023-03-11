

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'

function HomeWelcome() {


    return (
        <div className="homeWelcomeContainer">
          <img src={welcomeImg}/>
          <p>Shop the latest trends <br/> with DilVin</p>
          <button>Shop now</button>
        </div>
    )
}

export default HomeWelcome