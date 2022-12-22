import React from "react";
import { Button } from "../../global";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
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
        <FooterSubHeading>
          Join our exclusive membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form theme={theme}>
          <FormInput
            theme={theme}
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button fontBig>Subscription</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer theme={theme}>
        
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>
        <FooterLinksWrapper theme={theme}>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
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
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href="/https://www.youtube.com/watch?v=iP_HqoCuRI0"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
