import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products';
import { CartItem } from './CartItem';
import { ShopContext } from '../../context/Shop-context';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
 const   { cartItem, totalCartAmount, checkOut} = useContext(ShopContext)
  let totalBalance = totalCartAmount();
  const navigate = useNavigate();
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
      {totalBalance > 0 ?
      <div className="footer">
                <p>TotalAmout: ${totalBalance}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button onClick={() => checkOut()}>checkOut</button>
            </div>
          : <h1> Your Cart is Empty</h1>  }
    </div>
  )
}
