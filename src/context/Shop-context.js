import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';



export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let i = 0; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart;
};
export const ShopContextProvider = (props) => {
 const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
     setCartItem((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
       }

       const contextValue = {cartItem, addToCart, removeFromCart}
    //    console.log(cartItem);
  return (
    <ShopContext.Provider  value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
