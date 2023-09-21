import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context';


export const Product = (props) => {
  const { addToCart, cartItem } = useContext(ShopContext)
    const {id, productName, price, productImage} = props.data;
    const cartItemCount = cartItem[id];
  return (
    <div className="product">
     <img src={productImage} alt='this is the beauty'/>
     <div className="description">
      <p> <b> {productName} </b> </p>
      <p> ${price}</p>

      <button className='shpaddbtn' onClick={() => addToCart(id)}>add to cart
       {cartItemCount > 0 && <>({cartItemCount})</>}</button>
     </div>
    </div>
  )
}
