import React from "react";
import "../sass/Card.css";

const Card = (props) => {
  const { name, email } = props;
  return (
    <div className="cardBox">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="Card" className="robotCard"></img>
      <div className="cardBoxName">
        <h2>{name}</h2>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default Card;
