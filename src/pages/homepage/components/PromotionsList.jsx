

import "../styles/promotionsList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"
function PromotionsList() {


    return (
        <div className="promotionsContainer">
            <p>Promotions</p>
            <div className="promotionProductList">

            {JsonData.products.slice(0,6).map
            ((item , index) =>{ 
               return(
                <div className="product" key={item.id}><Product
                product_name={item.name}
                product_price={item.price}
                product_img={item.image}
                /></div>
               )
            }
            )}

            </div>
        </div>
    )
}

export default PromotionsList