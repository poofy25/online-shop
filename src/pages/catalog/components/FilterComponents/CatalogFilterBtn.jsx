
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"


function CatalogFilterBtn(props) {
    const optionData = props.option
    const clickHandler = ()=>{
    props.setOptionSelected({name:optionData.name , element:optionData.element , data:optionData?.data})
    }

    return (

             <div className="catalogFilterBtn" onClick={clickHandler}>
                <div className="catalogFilterBtnContainer">
                  <p>{optionData?.name}</p>
                  <button className="filterArrowBtn">
                      <div></div>
                      <div></div>
                  </button>
                </div>
             </div>

    )
 
}

export default CatalogFilterBtn