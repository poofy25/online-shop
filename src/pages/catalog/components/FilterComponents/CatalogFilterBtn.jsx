
import "/src/pages/catalog/styles/FilterStyles/catalogFilterBtn.css"
import { useEffect , useState} from "react"

function CatalogFilterBtn(props) {
    const optionData = props.option
    const filters = props.filters
    const [selectedOptionDataElement , setSelectedOptionDataElement] = useState()
    const clickHandler = ()=>{
     console.log(filters?.price)
    props.setOptionSelected({name:optionData.name , element:optionData.element , data:optionData?.data})
    }
    useEffect(()=>{
      if(filters[(optionData.name).toLowerCase()]){
        if(optionData.name === 'Price'){
             
          if(filters.price.range){

              filters.price.range.dir === '>=' ?
              setSelectedOptionDataElement(`Over ${filters.price?.range.amount}$`)
                        :
              setSelectedOptionDataElement(`Under ${filters.price?.range.amount}$`)
             
          }
          if(filters.price.sale){
            if(selectedOptionDataElement) setSelectedOptionDataElement(currentData =>`${currentData} , On sale`)
            else setSelectedOptionDataElement(`On sale`)

          }
        }
        else{
        setSelectedOptionDataElement(filters[(optionData.name).toLowerCase()].toString().replaceAll(',' , ' , '))
        }
      }
      console.log(selectedOptionDataElement)
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