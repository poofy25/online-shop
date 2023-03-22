import "../styles/cartProduct.css"
import { useContext ,useState , useEffect } from "react"
import { CartContext } from "../../../context/CartContext"
function CartProduct(props) {
 
    const [productAmount , setProductAmount] = useState(JSON.parse(localStorage.cartProducts)[props.productIndex].amount)
    const [cartProductData , setCartProductData] = useState(JSON.parse(localStorage.cartProducts)[props.productIndex])

    
  
    
    const increaseAmount = ()=>{
        setProductAmount(prevAmount => prevAmount + 1)
    }
    const decreaseAmount = ()=>{
        if(productAmount > 0) setProductAmount(prevAmount => prevAmount - 1)
    }
    
    useEffect(()=>{
        setCartProductData(currentData => ({...currentData , amount:productAmount}))
    },[productAmount])
    useEffect(()=>{
        let localStorageCartData = JSON.parse(localStorage.getItem('cartProducts'))
        localStorageCartData[props.productIndex] = cartProductData
        localStorage.setItem('cartProducts' , JSON.stringify(localStorageCartData))

    if(productAmount === 0 && cartProductData.amount ===0){
 
        const test = JSON.parse(localStorage.getItem('cartProducts')).filter((product)=>{
            return product.uniqueID !== cartProductData.uniqueID
        })
        props.updateLS(!props.LSData)
        localStorage.setItem('cartProducts',JSON.stringify(test))
        props.updateLS(!props.LSData)
        console.log('Deleted product :' , cartProductData)

    }


     },[cartProductData])















     







if (productAmount === 0 && cartProductData.amount ===0) {
    return (<p>Deleted product</p>)
} else return (
     <div className="productCartContainer">
         <img src={props.cartProductData.image}/>
         <div className="cartProductDetails">
            <p className="cartProductName">{props.cartProductData.name}</p>
            <p className="cartProductPrice">${props.cartProductData.price}</p>
            <span>
                <span className="cartProductSize">
                  <p>Size:&nbsp;</p>
                  <p>{props.cartProductData.size}</p>
                </span>

                <span className="cartProductColor">
                  <p>Color:&nbsp;</p>
                  <p>{props.cartProductData.color}</p>
                </span>
            </span>
            <div className="productCountContainer">
             <button onClick={decreaseAmount}>-</button>
             <div className="productAmmount">
                {productAmount}
             </div>
             <button onClick={increaseAmount}>+</button>
            </div>
            {props.productIndex}
         </div>
     </div>
)


}

export default CartProduct