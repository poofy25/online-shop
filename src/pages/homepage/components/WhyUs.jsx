

import "../styles/whyUs.css"
import clothingIcon from '/src/assets/Icons/highQualityClothingIcon.png'
import varietyIcon from '/src/assets/Icons/varietyIcon.png'
import pricingIcon from '/src/assets/Icons/pricingIcon.png'
import expierenceIcon from '/src/assets/Icons/expierenceIcon.png'


function WhyUs() {


    return (
        <div className="whyUsContainer">
            <p>Why chose dilVin</p>
            <div className="whyUsList">

              <div className="reason">
                <img src={clothingIcon}/>
                <p className="reasonTitle">Quality clothing</p>
                <p className="reasonExplication">
                Our products are made with high-quality materials
                to ensure durability and longevity.
                </p>
              </div>
              <div className="reason">
                <img src={varietyIcon}/>
                <p className="reasonTitle">Variety of styles</p>
                <p className="reasonExplication">
                We offer a wide selection of unique and trendy clothing
                options to suit any personal style.
                </p>
              </div>
              <div className="reason">
                <img src={pricingIcon}/>
                <p className="reasonTitle">Competitive pricing</p>
                <p className="reasonExplication">
                Our prices are reasonable and competitive
                without sacrificing quality.
                </p>
              </div>
              <div className="reason">
                <img src={expierenceIcon}/>
                <p className="reasonTitle">Easy shopping</p>
                <p className="reasonExplication">
                Our website is user-friendly, with clear product
                descriptions and fast, reliable shipping
                </p>
              </div>
            </div>
        </div>
    )
}

export default WhyUs