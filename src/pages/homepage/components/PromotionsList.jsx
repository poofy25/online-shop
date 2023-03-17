

import "../styles/promotionsList.css"
import Product from "../../../components/product/Product"
import JsonData from "/data/clothing-data/clothing-data.json"
import searchFilter from "../../../functions/filter"

var filterBy = {
    id:[4,30,23,1,9,44],
    discount:null,
}



function PromotionsList() {
    let lastProductItem;
    const promotionProductsList = searchFilter(filterBy , JsonData);




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
                            product_object={lastProductItem}
                            /></div>
                            <div className="product" ><Product
                            product_object={item}
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