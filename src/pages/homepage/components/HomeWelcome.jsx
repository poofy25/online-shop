

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'
import PreloadImage from 'react-preload-image'

function HomeWelcome() {


    return (
        <div className="homeWelcomeContainer">
          <PreloadImage
          src={welcomeImg}
          lazy
          className="homeIMG"
          />
          <p>Shop the latest trends <br/> with dilVin</p>
          <button>Shop now</button>
        </div>
    )
}

export default HomeWelcome