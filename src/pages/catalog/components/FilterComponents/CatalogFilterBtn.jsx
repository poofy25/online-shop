
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"


function CatalogFilterBtn(props) {

    const clickHandler = ()=>{
    props.setOptionSelected({name:props.name , element:props.element})
    }

    return (

             <div className="catalogFilterBtn" onClick={clickHandler}>
                <div className="catalogFilterBtnContainer">
                  <p>{props?.name}</p>
                  <button className="filterArrowBtn">
                      <div></div>
                      <div></div>
                  </button>
                </div>
             </div>

    )
 
}

export default CatalogFilterBtn