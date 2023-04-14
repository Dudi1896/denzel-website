import styled from "styled-components";

export const CodeBlockBG = styled.div`
  margin-left: 18vw;
  margin-top: 20px;
  position: relative;
  top: -20px;
  background-color: grey;
  border-radius: 5px;
  margin-bottom: -20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: -20px;
    margin-left: 0;
  }
`;


