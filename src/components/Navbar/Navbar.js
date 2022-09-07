import React from "react";
import Logo from "../../assets/images/heart.jpg";
// import { StyledNavbar } from "./Navbar.styled.js";
import "./Navbar.css";

const Navbar = (sticky) => {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
    </div>
  </nav>
      
      //  {/* <StyledNavbar sticky> */}
      //   // <img src={Logo} alt="logo" />
      //   // <h1> Stick'Me</h1>
      //  {/* </StyledNavbar> */}
  );
};

export default Navbar;
