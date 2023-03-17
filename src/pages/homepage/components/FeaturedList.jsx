

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"
import searchFilter from "../../../functions/filter";
import { json } from "react-router-dom";

const filterBy = {
    id:[13,29,11,40,44,35]
}

function FeaturedList() {
let lastProductItem;
const featuredProductsList = searchFilter(filterBy , JsonData);
console.log(featuredProductsList)


    return (
        <div className="featuredContainer">
            <p>Featured right now</p>
            <div className="productList">
            {featuredProductsList.map
            ((item , index) =>{ 
               
                  if (index%2==0){
                    lastProductItem = item
   
                    return 
                  }

                  if(index%2!==0){
                    
                    return(
                        <div className="twoProductsContainer" key={index + 1}>
                           
                            <div className="product" ><Product
                            product_name={lastProductItem.name}
                            product_price={lastProductItem.price}
                            product_price_discount={lastProductItem?.discount?.price_after_discount}
                            product_discount_percentage={lastProductItem?.discount?.percentage}
                            product_img={lastProductItem.image}
                            /></div>
                            <div className="product" ><Product
                            product_name={item.name}
                            product_price={item.price}
                            product_price_discount={item?.discount?.price_after_discount}
                            product_discount_percentage={item?.discount?.percentage}
                            product_img={item.image}
                            /></div>

                        </div>
                       )

                  }
              
            
             }
            )}
            </div>
        </div>
    )
}

export default FeaturedList
/*
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
*/ 