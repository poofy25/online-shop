import './checkout.css'
import { useLocation , useNavigate } from 'react-router-dom'

const CheckOutPage = ()=>{
   const location = useLocation()
   const cartItems = JSON.parse(localStorage.getItem('cartProducts'))
    
    if(cartItems.length > 0){
        console.log(cartItems)
    }else{
        return(
            <div className="websiteContent">
              <div className="checkoutPageContainer">
                <p>no items to checkout</p>
              </div>
            </div>
        )
    }

    return(
        <div className="websiteContent">
          <div className="checkoutPageContainer">
            <p>Checkout page</p>
            {cartItems.map((productData , index)=>{
               console.log(productData)
               return(
                <div>
                  <p>{productData.name}</p>
                  <p>{productData.size}</p>
                  <p>{productData.color}</p>
                  <p>{productData.price}</p>

                </div>
               )
            })}
          </div>
        </div>
    )
}

export default CheckOutPage