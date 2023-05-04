
import "/src/pages/catalog/styles/FilterStyles/desktop/catalogDesktopFilterMenu.css"
const CatalogDesktopFilterMenu = (props)=>{


    return(
        <div className="catalogDesktopFilterMenuShadow" onClick={(e)=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('open')}}>
            <div className="catalogDesktopFilterMenuContainer">
            {props.selectedFilter}
            </div>
        
        </div>
    )
}

export default CatalogDesktopFilterMenu