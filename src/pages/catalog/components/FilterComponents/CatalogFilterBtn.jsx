
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"


function CatalogFilterBtn(props) {
    const optionData = props.option
    const filters = props.data
    const clickHandler = ()=>{
    props.setOptionSelected({name:optionData.name , element:optionData.element , data:optionData?.data})
    }

    return (

             <div className="catalogFilterBtn" onClick={clickHandler}>
                <div className="catalogFilterBtnContainer">
                  <div className="catalogFilterBtnContainerWrapper">
                    <p>{optionData?.name}</p>
                    <button className="filterArrowBtn">
                      <div></div>
                      <div></div>
                    </button>
                  </div>
                  {filters[(optionData.name).toLowerCase()] &&
                  <div className="selectedDataContainer">
                    {filters[(optionData.name).toLowerCase()].toString().replaceAll(',' , ' , ')}
                  </div>
                  }
                </div>
             </div>

    )
 
}

export default CatalogFilterBtn