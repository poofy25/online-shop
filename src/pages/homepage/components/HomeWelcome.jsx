

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'


function HomeWelcome() {


    return (
        <div className="homeWelcomeContainer">
          <img
          src={welcomeImg}
          className="homeIMG"
          />
          <p>Shop the latest trends <br/> with dilVin</p>
          <button>Shop now</button>
        </div>
    )
}

export default HomeWelcome