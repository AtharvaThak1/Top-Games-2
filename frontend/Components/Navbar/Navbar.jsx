import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/LoginAuth";
import LogOut from "../../src/assets/Icons/logout.png";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">GameHub</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => setActive("Home")}
              className={active === "Home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/top-games"
              onClick={() => setActive("Top Games")}
              className={active === "Top Games" ? "active" : ""}
            >
              Top Games
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setActive("About")}
              className={active === "About" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setActive("Contact")}
              className={active === "Contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li className="login">
                <Link to="/login" onClick={() => setActive("")}>
                  Login
                </Link>
              </li>
              <li className="sign-up">
                <Link to="/sign-up" onClick={() => setActive("")}>
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button className="logout" onClick={logout}>
                Logout <img src={LogOut} alt="logout" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
