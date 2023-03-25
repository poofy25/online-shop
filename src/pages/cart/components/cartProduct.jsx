import "../styles/cartProduct.css"
import { useState , useEffect } from "react"
import trashIcon from '/src/assets/Icons/trashIcon.png'
import { useNavigate } from "react-router-dom"



function CartProduct(props) {
    let nagivate = useNavigate()
    let productData = props.productData
    const [productAmount , setAmount] = useState(productData.amount)
     
   const removeProductFromCart = (removedProduct)=>{
        const FilteredArray = JSON.parse(localStorage.getItem('cartProducts')).filter((product)=>{
            return product.uniqueID !== removedProduct.uniqueID
        })
        localStorage.setItem('cartProducts',JSON.stringify(FilteredArray))
        console.log(FilteredArray)
       props.updateLS(JSON.parse(localStorage.getItem('cartProducts')))
       
   }

   const handleAmountChange = (e)=>{
    
      if (e.target.textContent === '-'){
        if (productAmount - 1 > 0){
        setAmount(prev => prev - 1)
        } else {
            console.log('Delete function')
            removeProductFromCart(productData)
        }
      } else if (e.target.textContent === '+'){
        setAmount(prev => prev + 1)
      }

   }
   //This runs when the cart is remaped
   useEffect(()=>{
    setAmount(productData.amount)
   },[props.LSData])

   //This updates the local storage when item amount is updated
   useEffect(()=>{
    productData = {...productData , amount:productAmount}
    let localStorageCartData = JSON.parse(localStorage.getItem('cartProducts'))
        localStorageCartData[props.productIndex] = productData
    localStorage.setItem('cartProducts' , JSON.stringify(localStorageCartData))
    props.updateLS(JSON.parse(localStorage.getItem('cartProducts')))
   },[productAmount])

   const navigateToProduct = ()=>{
     nagivate(`/product/${productData.id}`)
   }
return (
     <div className="productCartContainer">
         <img src={productData.image} onClick={navigateToProduct}/>
         <div className="cartProductDetails">

              <p className="cartProductName" onClick={navigateToProduct}>{productData.name}</p>

              <button className="cartProductTrashBtn" onClick={()=>{removeProductFromCart(productData)}}><img src={trashIcon}/></button>
              
              <span className="sizeAndColorContainer">
                <span className="cartProductSize">
                  <p>Size:&nbsp;</p>
                  <p>{productData.size}</p>
                </span>

                <span className="cartProductColor">
                  <p>Color:&nbsp;</p>
                  <p>{productData.color}</p>
                </span>
              </span>
              <p className="cartProductPrice">
                ${(productAmount*(productData.discount ? productData.discount.price_after_discount : productData.price)).toFixed(2)}
              {productAmount > 1 ? <span> &nbsp; | &nbsp; ${productData.discount ? productData.discount.price_after_discount : productData.price} ea.</span> : <></>}
              </p>
            
              <div className="productCountContainer">
             <button onClick={handleAmountChange}>-</button>
             <div className="productAmmount">
                {productAmount}
             </div>
             <button onClick={handleAmountChange}>+</button>
              </div>
         </div>
     </div>
)
}

export default CartProduct