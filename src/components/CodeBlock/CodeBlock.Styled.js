import styled from "styled-components";

export const CodeBlockText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CodeBlockBG = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  padding: 0 6vw;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    padding: 0;
    margin-top: 40px;
  }
`;


