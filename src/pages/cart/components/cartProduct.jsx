import "../styles/cartProduct.css"
import { useState , useEffect } from "react"





function CartProduct(props) {
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

return (
     <div className="productCartContainer">
         <img src={productData.image}/>
         <div className="cartProductDetails">
            <p className="cartProductName">{productData.name}</p>
            <span>
                <span className="cartProductSize">
                  <p>Size:&nbsp;</p>
                  <p>{productData.size}</p>
                </span>

                <span className="cartProductColor">
                  <p>Color:&nbsp;</p>
                  <p>{productData.color}</p>
                </span>
            </span>
            <p className="cartProductPrice">${productData.discount ? productData.discount.price_after_discount : productData.price}</p>
            
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