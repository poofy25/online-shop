
import "../styles/productColors.css"
import { useState , useEffect} from "react"
function ProductColors(props) {
const productData = props.productData
const [productColor , setProductColor] = useState(productData?.colors[0])
console.log(productData)
const handleDropdown = (e)=>{
    const btnElement = document.querySelector(".productColorsContainer")
    if(btnElement.classList.contains("open")){
        btnElement.classList.remove("open")
    }else {
        btnElement.classList.add("open")
    }
}

const handleSelectSize = (e)=>{

    const colorChosen = e.currentTarget.textContent
    setProductColor(colorChosen)
    props.productCartData(prev=>({...prev , color:e.colorChosen}))
    document.querySelector(".productColorsContainer").classList.remove("open")
    }



useEffect(()=>{
    setProductColor(productData?.colors[0])
},[productData])

    return (
        <div className="productColorsContainer">
          <p>Color</p>
          <div className="productColorsWrapper">
            <button className="colorsBtn" onClick={handleDropdown}>
              <div className="productColorDiv" style={{backgroundColor:productColor}}></div>
            {productColor}
            <div className="btnarrow">
              <div className="leftarrow"></div>
              <div className="rightarrow"></div>
            </div>
          
            </button>
            <div className="colorsDropdownMenu">
            {productData?.colors.map((color)=>{
                return(
                    <button key={color} onClick={handleSelectSize}>
                        <div className="productColorDiv" style={{backgroundColor:color}}></div>
                        {color}</button>
                )
            })}
            </div>
          </div>
      </div>
    )
 
}

export default ProductColors

/*
function ProductColors(props) {
const productData = props.productData
const [productColor , setProductColor] = useState(productData?.colors[0])
const choseColorHandler = (e)=>{
    setProductColor(e.target.attributes.btncolor.value)
    props.productCartData(prev=>({...prev , color:e.target.attributes.btncolor.value}))
    e.target.parentNode.childNodes.forEach(button=>{
        button.style.border="2px solid rgba(0, 0, 0 , 0.5)"
        button.style.boxShadow='none'
    })
    e.target.style.border='2px solid white'
    e.target.style.boxShadow='0px 0px 0px 2px rgba(0, 0, 0,.75)'
}
useEffect(()=>{
    setProductColor(productData?.colors[0])
},[props.productData])

    return (
        <div className="productColorsContainer">
        <p className="productSelectedColor">Color  <span>- {productColor}</span></p>
        <div className="colorsBtns">
            {productData?.colors.map((color , index)=>{
               return( <button key={color}
               style={{backgroundColor:color ,
                boxShadow:index===0 ? '0px 0px 0px 2px rgba(0, 0, 0,.75)' : "none" ,
                border:index===0 ? '2px solid white' : "2px solid rgba(0, 0, 0 , 0.5)"
               }}
               onClick={choseColorHandler}
               btncolor={color}
               >{color}</button> )
            })}
        </div>
      </div>
    )
 
}
*/