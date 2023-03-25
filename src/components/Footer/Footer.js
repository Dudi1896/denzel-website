import React from "react";
import { Button, HoverScale } from "../../global";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
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
  SocialIcon,
} from "./Footer.styled";

const Footer = ({ lightBg, lightText, theme }) => {
  return (
    <FooterContainer lightBg={lightBg}>
      <FooterSubscription lightText={lightText}>
        <FooterSubHeading>Send Me A Message</FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form theme={theme}>
          <FormInput
            theme={theme}
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button fontBig>Send</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer theme={theme}>
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>SAY HELLO</FooterLinkTitle>
            <FooterLink to="sign-up">denzelu181@gmail.com</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems theme={theme}></FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle></FooterLinkTitle>
            <FooterLink to="sign-up">My Work</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
            <FooterLink to="/">Resume</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap theme={theme}>
          <SocialLogo to="/">
            <SocialIcon />
          </SocialLogo>
          <WebsiteRights>Denzel Udemba @ 2023</WebsiteRights>
          <SocialIcons>
            <HoverScale>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </HoverScale>

            <HoverScale>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </HoverScale>

            <HoverScale>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
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
