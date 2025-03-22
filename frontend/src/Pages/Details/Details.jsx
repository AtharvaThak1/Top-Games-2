import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Favourite from "../../JSON/Favourite";
import HundredFavourites from "../../JSON/Top100";
import { useAuth } from "../../../Context/LoginAuth";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   

  // Search for the game in both Favourite and HundredFavourites
  const game =
    Favourite.find((item) => item.id === parseInt(id)) ||
    HundredFavourites.find((item) => item.id === parseInt(id));

  if (!game) {
    return <h1 className="not-found">Game not found!</h1>;
  } else {
    document.title = "GameHub - " + game.title;
  }

  return (
    <div className="details-of-id">
      <div className="details-header">
        <h1>{game.title}</h1>
        <p className="rank">Rank: #{game.rank}</p>
      </div>
      <div className="details-content">
        <img src={game.image} alt={game.title} className="game-image" />
        <div className="description-of-game">
          <h3>Description</h3>
          <p>{game.description}</p>
        </div>
      </div>
      <div className="platforms">
        <h3>Available Platforms</h3>
        <div className="platform-cards">
          {game.platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
            >
              <img src={platform.icon} alt={platform.name} />
              <p>{platform.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
