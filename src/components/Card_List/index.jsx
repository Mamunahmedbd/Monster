import React from "react";
import Card from "../Card";
import "./card-list.css";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
