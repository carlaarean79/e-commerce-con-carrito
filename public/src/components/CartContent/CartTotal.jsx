import React, { useContext } from 'react'
import { cartContext } from '../productsContext/cartContent'
import './cart.css'
const CartTotal = () => {
  const {cart}=useContext(cartContext);
  const total =cart.reduce((acc,item)=>acc + item.price, 0);
  return (
    <div className='cartTotal-Total'>
    <div className='cartTotal'>
      <h3>Total: {total}</h3>
    </div>
    </div>
  )
}

export default CartTotal