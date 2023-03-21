import "../styles/cartProduct.css"
import { useContext ,useState , useEffect } from "react"
import { CartContext } from "../../../context/CartContext"
function CartProduct(props) {
    

    const {value, setValue} = useContext(CartContext)
    const [productAmount , setProductAmount] = useState(props.cartProductData.amount)
  
   console.log(props.productIndex)

  
    
    const increaseAmount = ()=>{
        setProductAmount(prevAmount => prevAmount + 1)
    }
    const decreaseAmount = ()=>{
        if(productAmount > 0) setProductAmount(prevAmount => prevAmount - 1)
    }

    useEffect(()=>{
       
        if (productAmount > 0){
            props.cartProductData.amount = productAmount
            setValue(value)
            console.log("Updated product amount")
            console.log(value)
        }

        
    },[productAmount])

  if(productAmount === 0){
        setValue(currentValue => currentValue.filter(product =>{
            return product !== props.cartProductData
        }))
        console.log("Deleted Item")
        return (<></>)
    }
    

    
return (
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
         </div>
     </div>
)
 
}

export default CartProduct