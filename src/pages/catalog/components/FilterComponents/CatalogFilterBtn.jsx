
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"
import { useEffect , useState} from "react"

function CatalogFilterBtn(props) {
    const optionData = props.option
    const filters = props.filters
    const [selectedOptionDataElement , setSelectedOptionDataElement] = useState()
    const clickHandler = ()=>{
    props.setOptionSelected({name:optionData.name , element:optionData.element , data:optionData?.data})
    }
    useEffect(()=>{
      if(filters[(optionData.name).toLowerCase()]){
        setSelectedOptionDataElement(filters[(optionData.name).toLowerCase()].toString().replaceAll(',' , ' , '))
      }else if((filters.range || filters.sale) && optionData.name === 'Price'){
        if(filters.range){

          filters.range[0] === '>=' ?
          setSelectedOptionDataElement(`Over ${filters.range[1]}$`)
                    :
          setSelectedOptionDataElement(`Under ${filters.range[1]}$`)
         
      }
      if(filters.sale){
        if(selectedOptionDataElement) setSelectedOptionDataElement(currentData =>`${currentData} , On sale`)
        else setSelectedOptionDataElement(`On sale`)

      }
      }else {
        setSelectedOptionDataElement(null)
      }
    },[filters])
    
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
                  {selectedOptionDataElement && 
                  <div className="selectedDataContainer">
                    {selectedOptionDataElement}
                  </div>
                  }
                </div>
             </div>

    )
 
}

export default CatalogFilterBtn