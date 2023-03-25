import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

export const CardSec = styled.div`
  color: ${({ lightText }) => (lightText ? theme.LightPrimary : theme.primaryDark)};
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? theme.LightPrimary : theme.primaryDark )};
`

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
  border: 2px dashed red;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (max-width: ${theme.tablet}) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    padding: 0 20px;
    justify-content: center;
  }

  @media screen and (max-width: ${theme.mobile}) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    padding:  0 15px;
  }

`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;


