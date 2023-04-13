import styled, { createGlobalStyle } from "styled-components";
import {theme} from "./theme";
 
export const GlobalStyles = createGlobalStyle`
    html, body, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
        text-decoration: none;
        overflow-x: hidden;
    }



    body {
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
  background: ${theme.MixGrade};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${ theme.LightColor };
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  display:  ${({ hide}) => (hide ? "none" : "block" )} ;
 
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: ${ theme.DarkColor };
    border: 2px solid ${ theme.DarkColor};
    background: ${({ primary }) =>
      primary ? theme.bluePrimary : theme.purplePrimary};
  }

  @media screen and (max-width: ${theme.mobile}) {
    width: 100%;
  }
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1250px;
margin-right: auto;
margin-left: auto;
padding: 20 0px;
/* border: dashed 14px darkcyan; */

@media screen and (max-wdth: ${theme.mobile}) {
    padding-right: 30px;
    padding-left: 30px; 
}
`;

export const HoverScale = styled.div`
  &:hover {
    transform: scale(1.009);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: ${theme.tablet}) {
    &:hover {
      transform: none;
    }
  }
`;