import React from "react";

import Logo from "../../assets/images/logo.svg";
import { StyledWelcome } from "./Welcome.styled.jsx";
import About from "../About/About.jsx";
import LazyShow from "../../Hooks/LazyShow";

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
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
    </main>
  );
};

export default Welcome;
