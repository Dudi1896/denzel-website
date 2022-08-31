import React from "react";

import Logo from "../../assets/images/heart.jpg";
import { StyledWelcome  } from "./Welcome.styled.js";
// import About from "./About";

const Welcome = ({ element }) => {
  return (
    <main>
      <StyledWelcome>
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Even if you scroll, I will stick with you</p>
          <button className="welcome__cta-primary">Contact us</button>
        </div>
      </StyledWelcome>
      {/* <About /> */}
    </main>
  );
};

export default Welcome;
