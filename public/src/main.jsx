import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ProductProvider } from './components/productsContext/cartContent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
)
