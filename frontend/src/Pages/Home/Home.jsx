import React from "react";
import "./Home.css";
import Minecraft from "../../assets/minecraft.png";
import { useAuth } from "../../../Context/LoginAuth";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import Favourite from "../../JSON/Favourite";

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="body">
      <div className="hero">
        <div className="left">
          <h1 style={{ color: "#ee9b00" }}>Welcome to the GameHub</h1>
          <p>The GameHub is a place where you can find BEST games for your</p>
          <p>
            <strong>PC</strong>, <strong>PlayStation</strong>,{" "}
            <strong>Xbox</strong>, <strong>Nintendo</strong> and{" "}
            <strong>Mobile</strong>
          </p>
          {isLoggedIn ? (
            <Link to="/top-games">
              <button className="btn">Explore</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
        <div className="right">
          <img src={Minecraft} alt="Minecraft" />
        </div>
      </div>
      <div className="favourite-games">
        <h1>Top Favourite Games</h1>
        <div className="games">
          {Favourite.map((game) => (
            <Card
              id={game.id}
              key={game.id}
              rank={game.rank}
              img={game.image}
              title={game.title}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
