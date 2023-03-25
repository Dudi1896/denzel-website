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
            <HoverScale>
              <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Card>
            </HoverScale>
          ))}
        </CardGridWrapper>
      </CardSec>
    </>
  );
};

export default Cards;
