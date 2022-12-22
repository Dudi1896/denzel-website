import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled.js";

const Burger = ({ sticky, open, setOpen }) => {
  return (
    <StyledBurger
      className={sticky ? "burger-menu" : "burger"}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
