import { useState , useEffect} from "react"
import "../styles/catalogFiltersOption.css"
import "../styles/catalogFilterColorOption.css"

const availableColors = [
    'Red',
    'Brown',
    'Khaki',
    'Yellow',
    'Olive',
    'Green',
    'lightblue',
    'Blue',
    'Navy',
    'Purple',
    'Pink',
    'Black',
    'Gray',
    'Beige',
    'White',
]
function CatalogFilterColorOption(props) {

const [selectedColors , setSelectedColors] = useState([])



 const onClickHandler = (e)=>{
 let optionElement = e.target
 if(!optionElement.classList.contains('active')){optionElement.classList.add('active')
 }else optionElement.classList.remove('active')
 }

 const colorBtnHandler = (e)=>{
 
    if( selectedColors.indexOf(e.target.style.backgroundColor) === -1 && selectedColors.length < 3){
        e.target.classList.add('selectedColor')
        setSelectedColors(currentArray =>[...currentArray, e.target.style.backgroundColor ])
    }else {
        e.target.classList.remove('selectedColor')
        setSelectedColors(currentArray =>currentArray.filter(value=>{return value!== e.target.style.backgroundColor}))
    }


}

useEffect(()=>{
    console.log(selectedColors)
},[selectedColors])



 return (

          <div className="catalogFilterColor">
             <div className="catalogFilterColorHeader" onClick={onClickHandler}>
               <p>Color</p>
               {selectedColors.map((color , index)=>{
                console.log(color)
                    return(<button key={index} onClick={colorBtnHandler} className="filterColorBtn" >
                        <div style={{backgroundColor:color , opacity:0.85}}>{color}</div>
                    </button>)
                })}
               <button className="filterArrowBtn">
                   <div></div>
                   <div></div>
               </button>
             </div>
             <div className="catalogFilterColorContent">
               <div className="colorFilterContainer">
                {availableColors.map((color , index)=>{
                    return(<button key={index} onClick={colorBtnHandler} className="filterColorBtn" >
                        <div style={{backgroundColor:color , opacity:0.85}}></div>
                    </button>)
                })}
           
               </div>
             </div>
          </div>

 )
 
}

export default CatalogFilterColorOption