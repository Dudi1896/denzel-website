import  React from "react";
import { NavLink } from "react-router-dom";
import { StyledMenu } from "./Menu.styled.jsx";
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

const menuLink = {
  textDecoration: "none",
};

const Menu = ({ sticky, open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <>
        <StyledMenu
          className={sticky ? "menuStick" : "menu"}
          open={open} aria-hidden={!isHidden} {...props}
        >
          <NavLink style={menuLink} to="/">
            <div className="menu-items" tabIndex={tabIndex}>
              <span role="img" aria-label="Home" aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
              </span>
              &emsp;Home
            </div>
          </NavLink>

          <NavLink style={menuLink} to="/MyWork">
            <div className="menu-items" tabIndex={tabIndex}>
              <span role="img" aria-label="My Work" aria-hidden="true">
                <FontAwesomeIcon icon={faFolderOpen} />
              </span>
              &emsp;My Work
            </div>
          </NavLink>

          <NavLink style={menuLink} to="/Blogs">
            <div className="menu-items" tabIndex={tabIndex}>
              <span role="img" aria-label="Blogs" aria-hidden="true">
                <FontAwesomeIcon icon={faBlog} />
              </span>
              &emsp;Blog
            </div>
          </NavLink>

          <NavLink style={menuLink} to="/Resume">
            <div className="menu-items" tabIndex={tabIndex}>
              <span role="img" aria-label="Resume" aria-hidden="true">
                <FontAwesomeIcon icon={faPaperclip} />
              </span>
              &emsp;Resume
            </div>
          </NavLink>

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

            <div className="social" tabIndex={tabIndex}>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:denzelu181@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
