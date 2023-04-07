import React from "react";
import { Button, HoverScale } from "../../global";
import { CardGridWrapper, Card, CardSec } from "./Cards.styled";
import { data } from "./data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Cards = ({ lightBg, primary }) => {
  return (
    <>
      <CardSec lightBg={lightBg}>
        <CardGridWrapper>
          {data.map((item) => (
            <Card key={item.id}>
              <HoverScale>
                <img src={item.image} alt={item.title} />
              </HoverScale>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="nonreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={item.visit} target="_blank" rel="nonreferrer" >
              
                <Button>Visit</Button>
              </a>
            </Card>
          ))}
        </CardGridWrapper>
      </CardSec>
    </>
  );
};

export default Cards;
