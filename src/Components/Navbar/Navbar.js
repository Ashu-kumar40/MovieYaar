import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./../../index.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h1 className="Logo-heading">
            <Link to="/">
              <span className="logoFirst">Movie</span>
              <span className="logoSecond">Yaar</span>
            </Link>
          </h1>
        </div>
        <div className="links">
          <Link to="movie/popular">Popular</Link>
          <Link to="movie/tranding">Tranding</Link>
          <Link to="movie/upcoming">Upcoming</Link>
        </div>
      </div>
    </div>
  );
}
