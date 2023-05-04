

import "../styles/featuredList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"
import searchFilter from "../../../functions/filter";
import { useNavigate } from "react-router-dom";

const filterBy = {
    id:[13,29,11,40,44,35]
}

function FeaturedList() {
const navigateTo = useNavigate()

let lastProductItem;
const featuredProductsList = searchFilter(filterBy , JsonData);


    return (
        <div className="featuredContainer">
            <p>FEATURED RIGHT NOW</p>
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
                            product_object = {lastProductItem}
                            /></div>
                            <div className="product" ><Product
                            product_object = {item}
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