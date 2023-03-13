

import "../styles/promotionsList.css"
import Product from "../../../components/product/Product"
function PromotionsList() {


    return (
        <div className="promotionsContainer">
            <p>Promotions</p>
            <div className="promotionProductList">

              <div className="promotionProduct"><Product/></div>
              <div className="promotionProduct"><Product/></div>
              <div className="promotionProduct"><Product/></div>
              <div className="promotionProduct"><Product/></div>
              <div className="promotionProduct"><Product/></div>
              <div className="promotionProduct"><Product/></div>

            </div>
        </div>
    )
}

export default PromotionsList