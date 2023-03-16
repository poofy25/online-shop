

import "../styles/promotionsList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"

const promotionProductsIDList = [2,5,3,6,4,1];
const keyValue = "id"



function PromotionsList() {
    let lastProductItem;
    const promotionProductsList = [];

    for (let i = 0; i < promotionProductsIDList.length; i++) {
        for(const productIndex in JsonData.products){
            if(JsonData.products[productIndex][keyValue] === promotionProductsIDList[i]){
                promotionProductsList.push(JsonData.products[productIndex])
            }
        }
    
    }



    return (
        <div className="promotionsContainer">
            <p>Promotions</p>
            <div className="promotionProductList">

            {promotionProductsList.map
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

export default PromotionsList




/*
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
            )}*/