import { React, useState, useEffect } from "react";
import "./Card.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  // const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
        <Link to={`/movie/${movie.id}`}>
          <div className="card">
            <img
              className="cardImg"
              src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`}>
            </img>

            <div className="movie-details">
              <h1 className="title">{movie ? movie.original_title : " "}</h1>
            
              <div className="date-rating">
                <span className="ReleaseDate">
                  {movie ? movie.release_date : ""}
                </span>

                <span className="poster_rating">
                  <i
                    class="fa-solid fa-star"
                    style={{ color: "#ffe042" }}>
                  </i>{" "}
                  {movie ? movie.vote_average : ""}
                </span>
              </div> 
            </div>
          </div>
        </Link>
        
      } 
    </>
  );
}
