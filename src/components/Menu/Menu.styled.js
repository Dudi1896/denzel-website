import styled from "styled-components";
import { theme } from "../../theme";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.MidPrimary};
  height: min(55vmin);
  text-align: left;
  padding: 5rem 2rem;
  position: absolute;
  width: min(40vmin);
  top: 3.0%;
  right: 0;
  z-index: 9;
  transition: transform 0.2s ease-in-out;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(-25%)" : "translateX(100%)")};

  @media (max-width: ${ theme.mobile }) {
    width: 100%;
    z-index: 3;
    height: 110vh;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0px;
    padding: 4.5rem 0rem;
    position: fixed;
  }

  @media (min-width: ${ theme.tablet }) {
    height: min(60vmin);
  }
`;

export const MenuText = styled.a`
  margin-left: 20px;
  font-size: min(2.25vmin);

  @media (max-width: ${ theme.mobile }) {
    font-size: 1.15rem;
  }
`;

export const MenuItems = styled.div`
  padding: min(1.5vmin);
  color: ${({ theme }) => theme.LightPrimary};
  border: 2px solid pink;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: ${ theme.mobile}) {
    padding: 2rem 3.45rem;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18%;
  border: 2px dashed green;
  padding: 0;
`;

export const Social = styled.a`
  font-size: min(2.75vmin);
  color: ${({ theme }) => theme.LightPrimary};
  margin: 0 10%;
  &:hover {
      color: ${({ theme }) => theme.primaryHover};
  }

    @media (max-width: ${ theme.mobile }) {
      font-size: 1.65rem;
      margin: 0 8%;
    }
`;
