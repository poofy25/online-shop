

import Product from "../../../components/product/Product"
import "../styles/catalogProducts.css"
function CatalogProducts(props) {

      const searchData = props.searchData
     
if(searchData){

    return (
        <>
        
        <div className="catalogProductsContainer">
        <p>Results for: {props.searchValue}</p>
        {searchData.length > 0 ? (searchData.map((item,index) =>{ 
               
            return(
                <div className="catalogProduct" key={index}><Product
                product_object = {item}
                /></div>
            )

        })) :
        <p>NO PRODUCTS WERE FOUND</p>
        }
        </div>
        </>
    )
} else {
    return (<p>damn</p>)
}
 
}

export default CatalogProducts