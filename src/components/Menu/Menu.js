import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledMenu,
  MenuText,
  MenuItems,
  BoxSocial,
  Social,
} from "./Menu.styled.js";
import { bool } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBlog,
  faFolderOpen,
  faPaperclip,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { HoverScale } from "../../global.js";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <NavLink to="/">
        <MenuItems tabIndex={tabIndex}>
          <span role="img" aria-label="Home" aria-hidden="true">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <MenuText>Home</MenuText>
        </MenuItems>
      </NavLink>

      <NavLink to="/MyWork">
        <MenuItems tabIndex={tabIndex}>
          <span role="img" aria-label="My Work" aria-hidden="true">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <MenuText>My Work</MenuText>
        </MenuItems>
      </NavLink>

      <NavLink to="/Blogs">
        <MenuItems tabIndex={tabIndex}>
          <span role="img" aria-label="Blogs" aria-hidden="true">
            <FontAwesomeIcon icon={faBlog} />
          </span>
          <MenuText>Blog</MenuText>
        </MenuItems>
      </NavLink>

      <NavLink to="/Resume" target="_blank" rel="noopener noreferrer">
        <MenuItems tabIndex={tabIndex}>
          <span role="img" aria-label="Resume" aria-hidden="true">
            <FontAwesomeIcon icon={faPaperclip} />
          </span>
          <MenuText>Resume</MenuText>
        </MenuItems>
      </NavLink>

      <BoxSocial tabIndex={tabIndex}>
        <Social
          href="https://www.linkedin.com/in/denzel-udemba-3500505b/"
          target="_blank"
          rel="noreferrer"
        >
          <HoverScale>
            <FontAwesomeIcon icon={faLinkedin} />
          </HoverScale>
        </Social>

        <Social
          href="https://github.com/Dudi1896"
          target="_blank"
          rel="noreferrer"
        >
          <HoverScale>
            <FontAwesomeIcon icon={faGithub} />{" "}
          </HoverScale>
        </Social>

        <Social
          href="https://twitter.com/denzence"
          target="_blank"
          rel="noreferrer"
        >
          <HoverScale>
            <FontAwesomeIcon icon={faTwitter} />
          </HoverScale>
        </Social>

        <Social
          href="mailto:denzelu181@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <HoverScale>
            <FontAwesomeIcon icon={faEnvelope} />
          </HoverScale>
        </Social>
      </BoxSocial>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
