import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../global";
import { 
  PageSection,
  Wrapper, 

} from "./About.styled.js";

const About = ({
  lightBg
}) => { return (
  <>
    <PageSection lightBg={lightBg}>
      <Wrapper>
      <h1>Hello. This is burger menu tutorial</h1>
      <small>
        Icon made by <a href="https://www.freepik.com/home">Freepik</a> from{" "}
        <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        {/* accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
ehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur */}
      </p>
      </Wrapper>
    </PageSection>
    </>
)
};

export default About;
