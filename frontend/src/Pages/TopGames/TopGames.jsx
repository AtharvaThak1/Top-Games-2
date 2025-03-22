import React from "react";
import "./TopGames.css";
import Top100 from "../../JSON/Top100";
import Card from "../../../Components/Card/Card";

const TopGames = () => {
  return (
    <div className="top-games">
      {Top100.map((game) => (
        <Card
          id={game.id}
          key={game.id}
          rank={game.rank}
          img={game.image}
          title={game.title}
          description={game.description}
        />
      ))}
      <div className="update-message">
        <p>More games will be updated soon...</p>
      </div>
    </div>
  );
};

export default TopGames;
