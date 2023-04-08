import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../global";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  ImgWrapper,
  Img,
  TopLine,
  Heading,
  Subtitle,
  Portrait,
} from "./Section.styles";

import { data, Port } from "../Cards/data";

const Section = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  start,
  img,
  alt,
  description,
  headline,
  lightText,
  topLine,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Section;
