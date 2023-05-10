
import './product.css'
import { useNavigate } from 'react-router-dom';

function Product(props) {

  const navigateTo = useNavigate()

  let priceElement;
  let discountElement;
  const productData = props.product_object
   if(productData.discount){
    priceElement = (
      <div className="productPriceContainer">
        <p className='productPriceDiscountPrice'>{productData.discount.price_after_discount}$</p>
        <p className='productPriceOldPrice discount'>{productData.price}$</p>
      </div>
    )
    discountElement = (
      <div className="priceDiscountNumber">{productData.discount.percentage}%</div>
    )
   } else {
   priceElement = ( 
      <div className="productPriceContainer">
       <p className='productPriceOldPrice'>{productData.price}$</p>
      </div>
   )
   }

   const navigateOnClick = ()=>{
    navigateTo(`/product/${productData.id}`)
   }





  return (
    <div className='productContainer'>
        <img src={productData.image} onClick={navigateOnClick} width='182px' height='275px' alt='' loading='lazy' fetchpriority='low'/>
        {discountElement}
        <p onClick={navigateOnClick}>{productData.name}</p>
        {priceElement}
    </div>
  )
}

export default Product
