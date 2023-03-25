import React from "react";
import { CardGridWrapper, Card } from "./Cards.styled";
import data from "./data";

const CardGrid = () => {
    return (
      <CardGridWrapper>
        {data.map(item => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Card>
        ))}
      </CardGridWrapper>
    );
  };

export default CardGrid;
