import React, { useState } from 'react'
import './navbar.css'
// IMPORT ICONS =================================>
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

function Navbar() {

  // Function to show Navbar

  const [menu, setMenu] = useState('menu');
  const showNavbar = () => {
    setMenu('showNavbar menu')
  }

  // Function to close Navbar

  const closeNavbar = () => {
    setMenu('menu')
  }

  // Function to add a background to the navbar on scroll

  const [transparent,setTransparent] = useState('Navbar');
  const addBG = () =>{
    if(window.scrollY >= 10){
      setTransparent('Navbar addBackground')
    }else{
      setTransparent('Navbar')
    }
  };
  window.addEventListener('scroll',addBG);

  return (
    <div className={transparent}>
      <div className="logoDiv">
        <SiTreehouse className='icon' />
        <span className='logo'>Homuz</span>
      </div>

      <div className={menu}>
        <ul>
          <li className="navList nav-text">Property</li>
          <li className="navList nav-text">Services</li>
          <li className="navList nav-text">Product</li>
          <li className="navList nav-text">About us</li>
        </ul>
        {/* icon to close navbar on small devices */}
        <AiFillCloseCircle className='icon closeIcon' onClick={closeNavbar} />
      </div>

      <button className="btn contactBtn">Contact</button>

      {/* icon to open navbar on small devices */}

      <PiDotsNineBold className='icon  menuIcon' onClick={showNavbar} />

    </div>
  )
}

export default Navbar
