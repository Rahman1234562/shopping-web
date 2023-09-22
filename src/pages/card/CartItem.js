import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context';

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
 const   { cartItem, addToCart, removeFromCart } = useContext(ShopContext)

  return (
    <div className="cart-item">
        <div className="cart-title">
            <img src={productImage} alt="this is about our item" />
        </div>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="input">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItem[id]}/>
            <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
