import React from 'react'


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className="product">
     <img src={productImage} alt='this is the beauty'/>
     <div className="description">
      <p> <b> {productName} </b> </p>
      <p> ${price}</p>

      <button className='shpaddbtn'>add to cart</button>
     </div>
    </div>
  )
}
