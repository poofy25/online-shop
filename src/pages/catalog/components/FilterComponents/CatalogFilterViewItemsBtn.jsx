
import "/src/pages/catalog/styles/FilterStyles/catalogFilterViewItemsBtn.css"


function CatalogFilterViewItemsBtn(props) {

    return (

             <div className="viewItemsContainer">
                <button onClick={()=>{props.closeFilterMenu(false)}}>VIEW ITEMS</button>
             </div>

    )
 
}

export default CatalogFilterViewItemsBtn