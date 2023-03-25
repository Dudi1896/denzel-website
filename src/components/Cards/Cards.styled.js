import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

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

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
  border: 2px dashed red;
  padding: 0 50px;
  max-width: 1250px;
  margin: 0 auto;
`;
