import React from 'react';
import { Product } from './Product';
import { PRODUCTS } from '../../Products';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Tech-Shop</h1>
      </div>
      <div className="product">
        {PRODUCTS.map((product) => (
          <Product data = {product} />
        ))}
      </div>
    </div>
  )
}

