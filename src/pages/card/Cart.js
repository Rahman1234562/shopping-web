import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products';
import { CartItem } from './CartItem';
import { ShopContext } from '../../context/Shop-context';
import './cart.css';

export const Cart = () => {
 const   { cartItem } = useContext(ShopContext)
  
  return (
    <div className="cart">
      <div>
        <h1>Your Card Item</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
         if(cartItem[product.id] !== 0){
          return <CartItem data={product}/>
         }
        })}
      </div>
    </div>
  )
}
