import React from 'react'
import {NavLink} from 'react-router-dom';
// import logo from 'src\Images\swiggy-1.svg';
import logo from '../../Images/swiggy-1.svg'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className = "global-nav">
    <nav className='navbar'>
        <div className='logo' >
            <img src={logo} alt="Logo"/>
        <div className="location">
            <span className="city">Jayanagar<span className="line"></span></span>
        <span className="state">Bengaluru, Karnataka, India</span>
      </div>
        </div>
        <ul className='nav-links'>
            <NavLink exact to="/" className="search" >
                <li>Search</li>
            </NavLink>
            <NavLink exact to="/" className="offer">
                <li>Offer</li>
            </NavLink>
            <NavLink exact to="/" className="help">
                <li>Help</li>
            </NavLink>
            <NavLink exact to="/" className="login">
                <li>Sign In</li>
            </NavLink>
            <NavLink exact to="/" className="cart">
                <li>Cart</li>
            </NavLink>
        </ul>
    </nav>
    
    </div>
   
  )
}

export default Navbar