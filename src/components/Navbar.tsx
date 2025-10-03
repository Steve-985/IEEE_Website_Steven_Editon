import { useState } from 'react'
import imageButton from '/src/assets/Logo_V5.png'
import './Navbar.css'

function Navbar(){
  return(
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <a href="/" className="navbar-logo">
            <img src={imageButton} className='bazinga'/>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu">
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/about" className="nav-link">About</a>
          </li>
          <li>
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li>
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;