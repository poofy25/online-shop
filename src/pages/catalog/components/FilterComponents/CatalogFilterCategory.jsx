
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"

const categories = [
  'Shirts',
  'Dresses',
  'Jeans',
  'Sportswear',
  "Coats",
  "Tops",
  'Hoodies',
  "Leggings",
  "Trousers"
]


function CatalogFilterCategory(props) {
    return (
         <div className="filterOptionContaianer">
           {categories.map((category,index)=>{
            return(
              <div className="catalogFilterBtn" key={index} onClick={()=>{props.setFilters(filters=>({...filters , category:category}))}}>
                <div className="catalogFilterBtnContainer">
                  <p>{category}</p>

                </div>
             </div>
            )
           })}
         </div>
    )
 
}

export default CatalogFilterCategory