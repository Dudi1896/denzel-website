import React from "react";

import Logo from "../../assets/images/logo.svg";
import { StyledWelcome } from "./Welcome.styled.js";
import About from "../About/About.js";

const Welcome = ({ element }) => {
  return (
    <main>
      <StyledWelcome>
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Even if you scroll, I will stick with you</p>
          <button>Contact us</button>
        </div>
      </StyledWelcome>
      <About />
      <About />
      <About />
      <About />
    </main>
  );
};

export default Welcome;
