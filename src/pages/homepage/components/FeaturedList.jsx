

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"

const featuredProductsIDList = [4,1,6,2,3,5];
const keyValue = "id"

function FeaturedList() {
let lastProductItem;
const featuredProductsList = [];
console.log("1")
for (let i = 0; i < featuredProductsIDList.length; i++) {
    for(const productIndex in JsonData.products){
        if(JsonData.products[productIndex][keyValue] === featuredProductsIDList[i]){
            featuredProductsList.push(JsonData.products[productIndex])
        }
    }

}


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
                            product_img={lastProductItem.image}
                            /></div>
                            <div className="product" ><Product
                            product_name={item.name}
                            product_price={item.price}
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