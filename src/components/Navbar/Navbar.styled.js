import styled from "styled-components";
import { theme } from "../../theme";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  position: fixed;
  animation: moveDown 1.2s ease-in-out;

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
  margin: 2rem 0rem 0rem 5rem;
  animation: rotate 0.7s ease-in-out 1.2s;
  z-index: 9;
  @media (max-width: ${theme.mobile}) {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  img {
    width: max(7vmin);
    @media (max-width: ${theme.mobile}) {
      width: 60px;
    }
  }

`;

