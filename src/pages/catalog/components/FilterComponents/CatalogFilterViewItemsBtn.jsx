
import "/src/pages/catalog/styles/FilterStyles/catalogFilterViewItemsBtn.css"


function CatalogFilterViewItemsBtn(props) {
    const MobileUser = window.innerWidth <= 767
    return (

             <div className="viewItemsContainer">
                <button onClick={()=>{
                   if(MobileUser) props.closeFilterMenu(false)
                   else props.setOptionSelected(null)
                    }}>
                        {MobileUser ? 'VIEW ITEMS' : 'APPLY FILTERS'}
                        </button>
             </div>

    )
 
}

export default CatalogFilterViewItemsBtn