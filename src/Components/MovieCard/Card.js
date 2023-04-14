import { React, useState, useEffect } from "react";
import "./Card.css";
import Loading from "../Loading/Loading";

export default function Card({ movie }) {
  // const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {
        isLoading
        ?
        <div className="card">
          <Loading />
        </div>
        :
        <div className="card">
          <img
            className="cardImg"
            src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`}>
            </img>
        </div>
      } 
    </>
  );
}
