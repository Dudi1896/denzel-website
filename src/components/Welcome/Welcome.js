import React from "react";
import { StyledWelcome } from "./Welcome.styled.js";
import CodeBlock from "../CodeBlock/CodeBlock.js";

const Welcome = ({ element }) => {
  return (
    <StyledWelcome>
      <div ref={element}>
        <div class="container">
          <div class="box">
            <div class="title">
              <span class="block"></span>
              <h1>
                Denzel Udemba<span></span>
              </h1>
            </div>
            <div class="role">
              <div class="block"></div>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
        <CodeBlock />
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
