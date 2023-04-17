import styled from "styled-components";

export const CodeBlockBG = styled.div`
  margin-left: 18vw;
  margin-top: 12px;
  position: relative;
  top: -15px;
  background-color: grey;
  border-radius: 5px;
  padding:0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 0;
  }
`;

export const SubHeader = styled.div`
  padding: 0px 4px;
  font-size: 14px;
  font-weight: 600;
  `;

export const HeaderClipBoard = styled.div`
padding: 0px 6px;
font-size: 20px;
color: ${({ theme }) => theme.DarkPrimary};
display: flex;
align-items: center;


p{
font-size: 12px;
font-weight: 600;
margin-left: 5px;
padding: 0;
}
`;