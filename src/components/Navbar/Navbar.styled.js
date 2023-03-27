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
  padding: 0 160px;

  @media (max-width: ${theme.tablet}) {
    padding: 0 40px;
  }

  @media (max-width: ${theme.mobile}) {
    position: absolute;
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
  }

  img {
    width: max(7vmin);
    @media (max-width: ${theme.mobile}) {
      width: 60px;
    }
  }
`;

export const StyledBurger = styled.button`
  right: 5.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: max(5vmin);
  background: transparent;
  border: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    z-index: 100;
    right: 1.3rem;
    height: max(9.6vmin);
    position: ${({ open }) => (open ? "fixed" : "absolute")};
  }

  div {
    width: max(4.9vmin);
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.LightPrimary : theme.DarkPrimary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: max(9.6vmin);
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
