
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"


function CatalogFilterBtn(props) {

    return (

             <div className="catalogFilterBtn">
                <div className="catalogFilterBtnContainer">
                  <p>{props.name}</p>
                  <button className="filterArrowBtn">
                      <div></div>
                      <div></div>
                  </button>
                </div>
             </div>

    )
 
}

export default CatalogFilterBtn