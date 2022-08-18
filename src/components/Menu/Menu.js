import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span role="img" aria-label="about us" aria-hidden="true">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span role="img" aria-label="Pricing" aria-hidden="true">💸</span>
        Pricing
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span role="img" aria-label="Contact" aria-hidden="true">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;