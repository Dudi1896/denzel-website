import React from "react";
import Logo from "../../assets/images/heart.jpg";
import { StyledNavbar } from "./Navbar.styled.js";

const Navbar = (sticky) => {
  return (

      <StyledNavbar sticky>
        <img src={Logo} alt="logo" />
        <h1> Stick'Me</h1>
      </StyledNavbar>
  );
};

export default Navbar;
