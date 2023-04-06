import React from "react";
import { HoverScale } from "../../global";
import { CardGridWrapper, Card, CardSec } from "./Cards.styled";
import { data } from "./data";

const Cards = ({ lightBg }) => {
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
            </Card>
          ))}
        </CardGridWrapper>
      </CardSec>
    </>
  );
};

export default Cards;
