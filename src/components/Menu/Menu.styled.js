import styled from "styled-components";
import { theme } from "../../theme";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.MidPrimary};
  height: min(55vmin);
  text-align: left;
  padding: 2rem 2rem;
  position: absolute;
  width: min(40vmin);
  top: 3%;
  right: 0;
  z-index: 9;
  transition: transform 0.2s ease-in-out;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(-25%)" : "translateX(100%)")};

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    z-index: 3;
    height: 110vh;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0px;
    padding: 4.5rem 0rem;
    position: fixed;
  }

  @media only screen and (min-width: ${theme.AirPad}) and (max-width: ${theme.tablet}) {
    height: min(60vmin);
    transform: ${({ open }) => open ? "translateX(-10%)" : "translateX(100%)"};
  }
`;

export const MenuText = styled.a`
  margin-left: 20px;
  font-size: min(2.25vmin);

  @media (max-width: ${theme.mobile}) {
    font-size: 1.15rem;
  }
`;

export const MenuItems = styled.div`
  padding: 10% 0;
  color: ${({ theme }) => theme.LightPrimary};

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: ${theme.mobile}) {
    padding: 2rem 3.45rem;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  padding: 0;
  justify-content: space-between;

`;

export const Social = styled.a`
  font-size: min(2.75vmin);
  color: ${({ theme }) => theme.LightPrimary};
  padding: 0 5px;
  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: ${theme.mobile}) {
    font-size: 1.65rem;
    margin: 0 3vw;
  }
`;
