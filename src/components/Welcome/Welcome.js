import React from "react";
import { StyledWelcome, WelcomeContainer } from "./Welcome.styled.js";
import CodeBlock from "../CodeBlock/CodeBlock.js";
import { Row, ColumnOneThirds, ColumnTwoThirds, MainTitle, MainText } from "../../global.js";

const Welcome = ({theme}) => {
  return (
    <StyledWelcome>
      <WelcomeContainer>
        <Row>
          <ColumnTwoThirds>
            <MainTitle>Denzel Udemba</MainTitle>
            <MainText theme={theme}>Software Engineer</MainText>
          </ColumnTwoThirds>
        </Row>
      </WelcomeContainer>

      <WelcomeContainer>
        <Row>
          <ColumnOneThirds></ColumnOneThirds>
          <ColumnTwoThirds>
            <CodeBlock />
          </ColumnTwoThirds>
        </Row>
      </WelcomeContainer>
    </StyledWelcome>
  );
};

export default Welcome;
