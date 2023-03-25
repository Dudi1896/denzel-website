import styled from "styled-components";
import { theme } from "../../theme";

export const PageSection = styled.div`
  color: ${({ lightText }) =>
    lightText ? theme.LightPrimary : theme.primaryDark};
  padding: 160px 0;
  border: 15px solid pink;
  background: ${({ lightBg }) =>
    lightBg ? theme.LightPrimary : theme.primaryDark};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
  @media screen and (max-width: ${theme.mobile}) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
