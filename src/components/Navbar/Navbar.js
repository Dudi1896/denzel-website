import React from "react";
import Logo from "../../assets/images/heart.jpg";
import { StyledNavbar } from "./Navbar.styled.js";
// import Burger from "../Burger/Burger.js";

const Navbar = () => (
  <StyledNavbar>
    <img src={Logo} alt="logo" />
    <h1> Stick'Me</h1>
    
  </StyledNavbar>
);

export default Navbar;
