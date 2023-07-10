import React from 'react'
import { useContext} from 'react'
import { cartContext } from '../productsContext/cartContent'
import './cart.css'

const CartElements = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="cart-container">
           {cart.map((product) => {
        return (
          <div className='cartItem-container' key={product.id}>
            <img className='img-cart' src={product.image} alt={product.description} />
            <h1 className='description-cart'>{product.title}</h1>
            <h2 className='price-cart'>$ {product.price}</h2>
          </div>
        );
      })}
    </div>
  );
    }


export default CartElements;


