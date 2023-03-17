
import './product.css'


function Product(props) {
  let priceElement;
  let discountElement;
   if(props.product_price_discount){
    priceElement = (
      <div className="productPriceContainer">
        <p className='productPriceDiscountPrice'>{props.product_price_discount}$</p>
        <p className='productPriceOldPrice discount'>{props.product_price}$</p>
      </div>
    )
    discountElement = (
      <div className="priceDiscountNumber">{props.product_discount_percentage}%</div>
    )
   } else {
   priceElement = ( 
      <div className="productPriceContainer">
       <p className='productPriceOldPrice'>{props.product_price}$</p>
      </div>
   )
   }







  return (
    <div className='productContainer'>
        <img src={props.product_img}/>
        {discountElement}
        <p>{props.product_name}</p>
        {priceElement}
    </div>
  )
}

export default Product
