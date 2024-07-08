import React from 'react'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { useContext} from 'react'
import { cartContext } from '../productsContext/cartContent'


const CartItemContent = () => {
  const {cart}=useContext(cartContext);

  return cart.length > 0 ? (
    <div className='cart-container'>
    <CartElements/>
    <CartTotal/>
    </div>
      ):(<h2 className='cart-enpty'>Tu carrito está vacío</h2>
      ) 
}

export default CartItemContent