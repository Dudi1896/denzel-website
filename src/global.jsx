import { createGlobalStyle } from "styled-components";

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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      
        @media (max-width: ${({ theme }) => theme.mobile}) {
            min-height: 500px;
        }
    
    }
      `;
