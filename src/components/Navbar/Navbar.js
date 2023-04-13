import React from "react";
import Logo from "../../assets/images/denzel-logo.png";
import { bool, func } from "prop-types";
import { NavbarLogo, StyledNavbar, StyledBurger } from "./Navbar.styled.js";

const Navbar = ({ open, setOpen }) => {
  return (
    <StyledNavbar>
      <NavbarLogo>
        <img src={Logo} alt="logo" />
      </NavbarLogo>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Navbar;
