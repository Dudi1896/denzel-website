import React from "react";
import Logo from "../../assets/images/heart.jpg";
import { NavbarLogo, StyledNavbar } from "./Navbar.styled.js";

const Navbar = (sticky) => {
  return (
    <StyledNavbar sticky={sticky}>
      <NavbarLogo>
        <img src={Logo} alt="logo" />
      </NavbarLogo>
    </StyledNavbar>
  );
};

export default Navbar;
