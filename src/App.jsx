import './App.css'
import {BrowserRouter, Routes, Route, Form} from 'react-router-dom';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import LoginForm from './components/Login/Login'
import ContactForm from './components/Contacto/Contacto';
import CartItemContent from './components/CartContent/CartItemContent';
import Products from './Products/Products';


function App() {
    return (
    <>
    <BrowserRouter>
    <div className='main-container'>

    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/allProducts' element={<Products/>}/>
     <Route path='/login' element={<LoginForm/>}/>
   <Route path='/contacto' element={<ContactForm/>}/>
   <Route path='/Cart' element={<CartItemContent/>}/>
      
    </Routes>
    <footer className='footer'>
    <Footer/>
    </footer>
    </div>
  
    </BrowserRouter>

    </>
  )
}

export default App
