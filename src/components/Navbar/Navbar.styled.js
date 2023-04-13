import styled from "styled-components";
import { theme } from "../../theme";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100;
  width: 100%;
  position: fixed;
  animation: moveDown 1.2s ease-in-out;
  top: 5%;
  padding: 0 95px;

  @media (max-width: ${theme.mobile}) {
    min-height: 52px;
  }

  @media only screen and (min-width: ${theme.AirPad}) and (max-width: ${theme.tablet}) {
    min-height: 49px;
    padding: 0 40px;
  }

  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(360deg);
    }
    100% {
      transform: rotateY(0rem);
    }
  }
`;

export const NavbarLogo = styled.div`
  animation: rotate 0.7s ease-in-out 1.2s;
  z-index: 9;

  @media (max-width: ${theme.mobile}) {
    position: ${({ open }) => (open ? "fixed" : "absolute")};
    left: 1rem;
  }

  @media only screen and (min-width: ${theme.AirPad}) and (max-width: ${theme.tablet}) {
    left: 4.3rem;
  }

  img {
    height: 2.1rem ;
    @media (max-width: ${theme.mobile}) {
      height: 2.1rem;
    }
  }
`;

export const StyledBurger = styled.button`
  right: 5.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  width: 2.3rem;
  border: .1px transparent solid;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    z-index: 100;
    right: 1.3rem;
    height: 2rem;
    position: ${({ open }) => (open ? "fixed" : "absolute")};
  }



  div {
    width: 1.82rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.LightPrimary : theme.PrimaryColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 1.82rem;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
