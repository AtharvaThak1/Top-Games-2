import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  const description = props.description.substring(0, 100) + "...";

  return (
    <div onClick={handleClick} className="game-card">
      <div className="rank">
        <p>{props.rank}</p>
      </div>
      <img src={props.img} />
      <div className="details">
        <h3>{props.title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
