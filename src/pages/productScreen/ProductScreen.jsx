import { useParams } from "react-router-dom"
import searchFilter from "../../functions/filter";
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState } from "react";
import "./productScreen.css"


function ProductPage() {
     let params = useParams();
    const [productID , setProductID] = useState(Number(params.id))
    const [productData , setProductData] = useState({})
    const [productColor , setProductColor] = useState(productData[0]?.colors[0])

     const filterBy = {
        id:[productID]
    }
    useEffect(()=>{
        setProductData(searchFilter(filterBy , JsonData)) 
    },[])
    useEffect(()=>{
        setProductID(Number(params.id))
    },[params])
    useEffect(()=>{
        setProductData(searchFilter({id:[productID]} , JsonData))
    },[productID])
    useEffect(()=>{
        setProductColor(productData[0]?.colors[0])
    },[productData])

    const choseColorHandler = (e)=>{
        setProductColor(e.target.attributes.btncolor.value)
        e.target.parentNode.childNodes.forEach(button=>{
            button.style.border="2px solid rgba(0, 0, 0 , 0.5)"
            button.style.boxShadow='none'
        })
       
        e.target.style.border='4px solid white'
        e.target.style.boxShadow='0px 0px 0px 4px rgba(0, 0, 0,.75)'
    }



    return (
        <>
        <div className="productScreen">
            <img src={productData[0]?.image}/>
            <div className="productContent">
              <p className="productName">{productData[0]?.name}</p>
              <p className="productPercentOff">{productData[0]?.discount ? `Save ${productData[0]?.discount.percentage}%` : ""}</p>
              <div className="productPriceContainer">
               <p className="productPrice">{productData[0]?.discount ? "" : '$'+productData[0]?.price}</p>
               <p className="productPriceAfterDiscount">{productData[0]?.discount ? '$'+productData[0]?.discount.price_after_discount : ""}</p>
               <p className="productPriceBeforeDiscount">{productData[0]?.discount ? "$"+productData[0]?.price : ""}</p>
              </div>
              <div className="productColorsContainer">
                <p className="productSelectedColor">Color  <span>- {productColor}</span></p>
                <div className="colorsBtns">
                    {productData[0]?.colors.map((color , index)=>{
                        console.log(index)
                       return( <button key={`product color : ${color}`}
                       style={{backgroundColor:color ,
                        boxShadow:index===0 ? '0px 0px 0px 4px rgba(0, 0, 0,.75)' : "none" ,
                        border:index===0 ? '4px solid white' : "2px solid rgba(0, 0, 0 , 0.5)"
                       }}
                       onClick={choseColorHandler}
                       btncolor={color}
                       >{color}</button> )
                    })}
                </div>
              </div>
            </div>
            
        </div>
        </>
    )
 
}

export default ProductPage