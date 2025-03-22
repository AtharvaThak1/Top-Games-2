import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../src/Pages/Home/Home";
import { AuthProvider } from "../Context/LoginAuth";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Details from "./Pages/Details/Details";
import Footer from "./Components/Footer/Footer";
import TopGames from "./Pages/TopGames/TopGames";
import "./index.css";
import About from "../src/Pages/About/About";
import Contact from "../src/Pages/About/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-games" element={<TopGames />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
