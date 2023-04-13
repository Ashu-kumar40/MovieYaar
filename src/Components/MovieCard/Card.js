import { React, useState, useEffect} from "react";
import "./Card.css";
import Loading from "../Loading/Loading";

export default function Card() {



  return (
    <div className="card">
      <Loading />
      {/* <img className="cardImg" src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`}></img> */}
    </div>
  );
}
