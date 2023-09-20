import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
        <div className="navbar">
        <div className="link">
            <Link to="/">Shop</Link>
            <Link to="/card"><ShoppingCart/></Link>
        </div>
        </div>
  )
}
