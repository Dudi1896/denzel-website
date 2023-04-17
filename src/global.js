import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

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
  color: ${theme.LightColor};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  display: ${({ hide }) => (hide ? "none" : "block")};

  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: ${theme.DarkColor};
    border: 2px solid ${theme.DarkColor};
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

export const Row = styled.div`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const ColumnTwoThirds = styled.div`
  /* 2/3 column */
  float: left;
  width: 66.6%;
  border: 2px solid transparent;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;

export const ColumnOneThirds = styled.div`
  /* 1/3 column */
  float: left;
  width: 33.3%;
  border: 2px solid transparent;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Segoe UI";
  color: ${({ theme }) => theme.PrimaryColor};
  font-size: max(10vmin);
  -webkit-animation: mainFadeIn 2s forwards;
  -o-animation: mainFadeIn 2s forwards;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MainText = styled.p`
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0%;
  font-weight: 600;
  font-family: "Segoe UI";
  background: ${({ theme }) => theme.MainGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: max(4vmin);
  text-transform: uppercase;
  letter-spacing: 5px;

  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  position: relative;
  justify-content: space-between;
`;

export const SvgBGDesign = styled.div`
  background-color: ${({ theme }) => theme.DarkColor};
  padding: 7px 4px;
  font-size: 14px;
  margin: 1px 1px -2px 1px;
  border-top-left-radius: 5px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 66.5px;
    transform: translateY(-45%);
    width: 0;
    height: 0;
    border-top: 17px solid transparent;
    border-left: 12px solid ${({ theme }) => theme.DarkColor};
    border-bottom: 17px solid transparent;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      left: 66.7px;
    }

    @media only screen and (min-width: ${theme.AirPad}) and (max-width: ${theme.tablet}) {
      left: 66.4px;
    }
  }
`;
