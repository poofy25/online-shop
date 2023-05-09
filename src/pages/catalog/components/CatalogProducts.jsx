

import Product from "../../../components/product/Product"
import CatalogPagesNavigator from "./CatalogPagesNavigator"
import "../styles/catalogProducts.css"
function CatalogProducts(props) {

      const searchData = props.catalogData.searchData[props.catalogData.catalogPage - 1]
      if(searchData){

    return (
        <>
        
        <div className="catalogProductsContainer">
        {props.catalogData.searchData.length > 0 ? (searchData.map((item,index) =>{ 
               
            return(
                <div className="catalogProduct" key={index}><Product
                product_object = {item}
                /></div>
            )

        })) :
        <p>NO PRODUCTS WERE FOUND</p>
        }
       <CatalogPagesNavigator catalogData={props.catalogData} setCatalogData={props.setCatalogData}/>
        </div>
        </>
    )
} else {
    return (<p>damn</p>)
}
 
}

export default CatalogProducts