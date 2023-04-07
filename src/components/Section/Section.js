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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet" + "cum officiis necessitatibus odio, itaque, dolores rem
              quam, culpa ipsa ratione temporibus" + "beatae aliquid? Natus
              aperiam totam dicta sunt maxime in iste quae tempore ipsam
              inventore" + "mollitia ut nihil, nobis dolores officia cumque est
              rerum illum reiciendis exercitationem ratione" + "quibusdam
              numquam perferendis? Officia laudantium porro expedita, deserunt
              molestias enim asperiores" + "aperiam minima possimus veniam
              eligendi, architecto quae hic, fugit mollitia dolores aliquam?
              Natus" + "error doloremque quasi autem distinctio iure nam.
              Possimus eaque quod aut autem numquam suscipit at vel" + "rem
              voluptatem totam dicta ratione magnam recusandae tempora cum,
              natus repellendus sint ea optio. Harum"
              {/* <Img src={img} alt={alt} /> */}
            </ImgWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Section;
