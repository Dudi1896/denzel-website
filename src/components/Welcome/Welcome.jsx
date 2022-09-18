import React from "react";

import Portrait from "../../assets/images/portrait.jpg";
import { StyledWelcome } from "./Welcome.styled.jsx";
import About from "../About/About.jsx";
import LazyShow from "../../Hooks/LazyShow";

const Welcome = ({ element }) => {
  return (
    <StyledWelcome>
      <div ref={element}>
        {/* <img src={Portrait} alt="portrait" className="welcome--logo" /> */}
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
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
