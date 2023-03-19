
import "../styles/productSizes.css"
import { useState } from "react"

function ProductSizes(props) {
const productData = props.productData
const [selectedSize , setSelectedSize] = useState("Chose your size ")

const handleDropdown = (e)=>{
    if(document.querySelector(".productSizesContainer").classList.contains("open")){
        document.querySelector(".productSizesContainer").classList.remove("open")
    }else {
        document.querySelector(".productSizesContainer").classList.add("open")
    }
}
const handleSelectSize = (e)=>{
setSelectedSize(e.target.textContent)
document.querySelector(".productSizesContainer").classList.remove("open")
}

    return (
      <div className="productSizesContainer">
       <p>Size</p>
       <button className="sizesBtn" onClick={handleDropdown}>
          {selectedSize}
          <div className="btnarrow">
            <div className="leftarrow"></div>
            <div className="rightarrow"></div>
          </div>
          
        </button>
        <div className="sizesdropdownMenu">
            {productData?.sizes.map((size)=>{
                return(
                    <button key={size} onClick={handleSelectSize}>{size}</button>
                )
            })}
          </div>
      </div>
    )
 
}

export default ProductSizes