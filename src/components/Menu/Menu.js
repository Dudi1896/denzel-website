import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBlog,
  faFolderOpen,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const menuLink = {
  textDecoration: "none",
  // padding: "10px",
  // margin: "10px",
};

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <NavLink style={menuLink} to="/">
        <div className="menu-items" tabIndex={tabIndex}>
          <span role="img" aria-label="My Work" aria-hidden="true">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          &emsp;My Work
        </div>
      </NavLink>

      <NavLink style={menuLink} to="/">
        <div className="menu-items" tabIndex={tabIndex}>
          <span role="img" aria-label="Pricing" aria-hidden="true">
            <FontAwesomeIcon icon={faBlog} />
          </span>
          &emsp;Blog
        </div>
      </NavLink>

      <NavLink style={menuLink} to="/">
        <div className="menu-items" tabIndex={tabIndex}>
          <span role="img" aria-label="Contact" aria-hidden="true">
            <FontAwesomeIcon icon={faPaperclip} />
          </span>
          &emsp;Resume
        </div>
      </NavLink>

      <br />
      <div className="hello">
        <span role="img" aria-label="Say Hello" aria-hidden="true">
          SAY HELLO
        </span>
      </div>

      <div className="menu-items" tabIndex={tabIndex}>
        <span role="img" aria-label="info@dudemba.dev" aria-hidden="true">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        &emsp;info@dudemba.dev
      </div>
      <div className="box-social">
        <div className="social" tabIndex={tabIndex}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/denzel-udemba-3500505b/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="social" tabIndex={tabIndex}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dudi1896"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="social" tabIndex={tabIndex}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/denzence"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
