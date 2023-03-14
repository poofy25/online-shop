

import "../styles/homeWelcome.css"
import welcomeImg from '/src/assets/Images/homePageMobileWelcome.png'
function preload_image(im_url) {
  const img = new Image();
  img.src = im_url;
}
function HomeWelcome() {


    return (
        <div className="homeWelcomeContainer">
          {preload_image(welcomeImg)}
          <p>Shop the latest trends <br/> with dilVin</p>
          <button>Shop now</button>
        </div>
    )
}

export default HomeWelcome