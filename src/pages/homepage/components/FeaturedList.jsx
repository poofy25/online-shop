

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"

function FeaturedList() {


    return (
        <div className="featuredContainer">
            <p>Featured right now</p>
            <div className="productList">

              <div className="product"><Product/></div>
              <div className="product"><Product/></div>
              <div className="product"><Product/></div>
              <div className="product"><Product/></div>
              <div className="product"><Product/></div>

            </div>
        </div>
    )
}

export default FeaturedList