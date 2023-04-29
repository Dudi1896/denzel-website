import React from "react";
import { HoverScale } from "../../global";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../../assets/images/logo-d.png";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.styled";

const Footer = ({ lightBg, lightText, theme }) => {
  return (
    <FooterContainer lightBg={lightBg}>
      <FooterLinksContainer theme={theme}>
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>SAY HELLO</FooterLinkTitle>
            <FooterLink
              href="mailto:denzelu181@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              denzelu181@gmail.com
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems theme={theme}></FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <NavLink to="/">
              <FooterLink>Home</FooterLink>
            </NavLink>

            <NavLink to="/MyWork">
              <FooterLink>My Work</FooterLink>
            </NavLink>

            <NavLink to="/Blogs">
              <FooterLink>Blog</FooterLink>
            </NavLink>

            <NavLink to="/Resume" target="_blank" rel="noreferrer">
              <FooterLink>Resume</FooterLink>
            </NavLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap theme={theme}>
          <SocialLogo to="/">
        <img src={Logo} alt="logo" />
          </SocialLogo>
          <WebsiteRights>Denzel Udemba @ 2023</WebsiteRights>
          <SocialIcons>
            <HoverScale>
              <SocialIconLink
                href="https://twitter.com/denzence"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </HoverScale>

            <HoverScale>
              <SocialIconLink
                href="https://www.linkedin.com/in/denzel-udemba-3500505b/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </HoverScale>

            <HoverScale>
              <SocialIconLink
                href="https://github.com/Dudi1896"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </HoverScale>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
