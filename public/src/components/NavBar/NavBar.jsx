import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
        <div className='nav-container'>
            <nav className='navbar'>
                <Link to={'/'} className='home'>Home</Link>
                <Link to={'allProducts'} className='allProducts'>All Products👔👚📺💍</Link>
                <Link to={'/contacto'} className='contact'>Contact ✉</Link>
                <Link to={'/login'} className='login'>Login 😃</Link>
                <Link to={'/Cart'} className='seeCart'>🛒</Link>
            </nav>
        </div>
    </div>
  )
}

export default NavBar;