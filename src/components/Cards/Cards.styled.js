import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

export const CardSec = styled.div`
  color: ${({ lightText }) =>
    lightText ? theme.LightPrimary : theme.primaryDark};
  padding: 160px 0;
  background: ${({ lightBg }) =>
    lightBg ? theme.LightPrimary : theme.primaryDark};
`;

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 40px;
  border: 2px dashed red;
  max-width: 1450px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: ${theme.tablet}) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    padding: 0 20px;
    justify-content: center;
  }

  @media screen and (max-width: ${theme.mobile}) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    padding: 0 15px;
  }
`;

export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 8px 8px;
  background: rgba(255,255,255,0.4);
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
  min-height: 350px;

  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }


  a{
    font-size: min(4.75vmin);
  color: ${({ theme }) => theme.PrimaryColor};
  /* margin: 0 10%; */
  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }

  }

  p {
    font-size: 14px;
  }
`;
