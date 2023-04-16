import styled from "styled-components";

export const CodeBlockBG = styled.div`
  margin-left: 18vw;
  margin-top: 18px;
  position: relative;
  top: -20px;
  background-color: grey;
  border-top-right-radius: 5px;
  margin-bottom: -20px;
  padding:0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: -20px;
    margin-left: 0;
  }
`;

export const SubHeader = styled.div`
  padding: 7px 4px;
  font-size: 14px;
  font-weight: 600;
  `;

export const HeaderClipBoard = styled.div`
padding: 0px 6px;
font-size: 18px;
color: ${({ theme }) => theme.DarkPrimary};
/* border: 2px solid whitesmoke; */
display: flex;
align-items: center;


p{
font-size: 12px;
font-weight: 600;
margin-left: 5px;
padding: 0;
}
`;