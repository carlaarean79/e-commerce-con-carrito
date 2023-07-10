import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
import Buscando from '../Loading/Buscando';

export const cartContext = createContext({});

export const ProductProvider = ({ children }) => {
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([]);//useSate debe ser usado dentro de una funcion- no puede ser usado dentro de useEffect
  const [cart, setCart]=useState([]);
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(products => {
        setProducts(products)
        console.log(products);
      });
  }, []);

  if (!products.length) return <Buscando/>

  return (
    <cartContext.Provider value={{products, cart, setCart}} >
      {children}
    </cartContext.Provider>
  )
}

