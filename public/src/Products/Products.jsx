 import React, { useContext, useState } from 'react';
import { cartContext } from '../components/productsContext/cartContent.jsx';
import './Products.css';
 
const Product = ({ product}) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
 
  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };
  const {cart,setCart}=useContext(cartContext)
  const buyProduct=(product)=>{
console.log(product);
setCart([...cart,product])
  }

 return (
  <div className="card-style">
    
      <button onClick={()=>buyProduct(product)} className="carrito">Añadir al carrito</button>
      <h1>Categoría: {product.category}</h1>
      <h2>{product.title}</h2>
      <div className="img">
        
        <img src={product.image} alt={product.title} />
      </div>
      {descriptionVisible ? (
        <>
          <h2>Descripción: {product.description}</h2>
          <div className="btn">
            <button onClick={toggleDescription}>Ocultar Descripción</button>
            <h3>$ {product.price}</h3>
          </div>
        </>
      ) : (
        <div className="btn">
          <button onClick={toggleDescription}>Ver Descripción</button>
          <h3>$ {product.price}</h3>
        </div>
      )}
    </div>
  )
      
};

const Products = () => {
  /* const cardProduct = useContext(cartContext); */
  const {products}=useContext(cartContext);

  return (
    <div className="container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products; 


 







