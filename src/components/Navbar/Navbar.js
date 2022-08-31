import "./Navbar.css"
import Logo from "../../assets/images/heart.jpg"
import { Burger, Menu } from "../../components"

import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks.js";



const Navbar = () => (


  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" />
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link">
      <Burger />
      <Menu />
      <li className="navbar--link-item">About</li>
    </ul>
  </nav>

)
export default Navbar