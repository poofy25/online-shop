

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
function CatalogHeader(props) {

    const searchValue = props.searchValue
    const rawSearchData = props.rawSearchData
   
    return (
         <div className="catalogHeader">
            <div className="catalogCategoryName"><p>{searchValue}</p></div>
            <div className="catalogCategories">
                <button>Shirts</button>
                <button>Dresses</button>
                <button>Jeans</button>
                <button>Leggings</button>
                <button>Trousers</button>
                <button>Hoodies</button>
                <button>Coats</button>
            </div>
            <div className="catalogFilterAndAmountContainer">
                <div className="catalogProductAmount">
                    <p>{rawSearchData.length} Products</p></div>
                <button className="catalogFilter">
                    <img src={filterIcon} />
                    Filter
                    </button>
            </div>

         </div>
    )
 
}

export default CatalogHeader