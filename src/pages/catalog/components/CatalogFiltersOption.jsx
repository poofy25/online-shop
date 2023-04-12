
import "../styles/catalogFiltersOption.css"
import { useState , useEffect , useRef } from "react"


function CatalogFiltersOption(props) {
    // ON / OFF state
    const [optionState , setOptionState] = useState(false)

    const onClickHandler = (e)=>{
    let optionElement = e.target
    if(!optionElement.classList.contains('active')){optionElement.classList.add('active')
    }else optionElement.classList.remove('active')
    }

    return (

             <div className="catalogFilterColor">
                <div className="catalogFilterColorHeader" onClick={onClickHandler}>
                  <p>Color</p>
                  <button>
                      <div></div>
                      <div></div>
                  </button>
                </div>
                <div className="catalogFilterColorContent">
                  content
                </div>
             </div>

    )
 
}

export default CatalogFiltersOption