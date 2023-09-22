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

 const totalCartAmount = () => {
  let totalAmount = 0;
  for(const item in cartItem) {
    if(cartItem[item] > 0){
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItem[item] * itemInfo.price;
    }
  } 
  return totalAmount;
 }

    const addToCart = (itemId) => {
     setCartItem((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
       }

       const updateCartItem = (newItem, itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: newItem}))
       }

       const contextValue = {cartItem, addToCart, removeFromCart, updateCartItem, totalCartAmount}
    //    console.log(cartItem);
  return (
    <ShopContext.Provider  value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
