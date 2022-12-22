import styled, { createGlobalStyle } from "styled-components";
import {theme} from "./theme";
 
export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            margin: 0;
        }
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.LightPrimary};
        color: ${({ theme }) => theme.PrimaryColor};
        height: 100%;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lato", "Poppins";
      
        @media (max-width: ${({ theme }) => theme.mobile}) {
            min-height: 500px;
        }
    }
      `;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) =>
    primary ? theme.purplePrimary : theme.bluePrimary};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? theme.LightPrimary : theme.DarkPrimary)};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) =>
      primary ? theme.bluePrimary : theme.purplePrimary};
  }

  @media screen and (max-width: ${theme.mobile}) {
    width: 100%;
  }
`;
