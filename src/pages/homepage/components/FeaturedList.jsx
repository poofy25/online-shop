

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"

function FeaturedList() {

console.log(JsonData.products.slice(0,5))
    return (
        <div className="featuredContainer">
            <p>Featured right now</p>
            <div className="productList">
            {JsonData.products.slice(0,5).map
            ((item , index) =>{ 
               console.log(item , index)
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

export default FeaturedList