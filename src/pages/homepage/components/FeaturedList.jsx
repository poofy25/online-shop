

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"

const featuredProductsID = [1,2,3,4,5,6]

function FeaturedList() {
let lastProductItem;

    return (
        <div className="featuredContainer">
            <p>Featured right now</p>
            <div className="productList">
            {JsonData.products.slice(0,6).map
            ((item , index) =>{ 
                  if (index%2==0)
                  {
                    lastProductItem = item
   
                    return 
                  }

                  if(index%2!==0){

                    console.log("")
                    console.log("Idex:"+ index)
                    console.log("Last Item:"+lastProductItem.id)
                    console.log("Item:"+item.id)
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