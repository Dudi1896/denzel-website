import React from "react";
import Logo from "../../assets/images/heart.jpg";
import { StyledNavbar } from "./Navbar.styled.jsx";

const Navbar = (sticky) => {
  return (
    <StyledNavbar className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
    </div>
  </StyledNavbar>
  );
};

export default Navbar;
