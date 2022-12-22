// import { StyledCard } from "./Card.styled";
import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <div id="container-cards">
      <div id="album-container">
        {/* <h1>{props.title}</h1> */}
        {/* <img src={props.img} alt={props.title} /> */}
        <div className="album-info">
          {/* <p>Artist: {props.artist}</p> */}
          {/* <p>Relased Year: {props.year}</p> */}
          {/* <p>Album #{props.id}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
