import { React, useState, useEffect } from "react";
import styles from "./Card.module.css";
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
        <div className={styles.card}>
          <Loading />
        </div>
        :
        <Link to={`movie-details/${movie.id}`} key={`${movie.id}`}>
          <div  className={styles.card}>
            <img
              className={styles.cardImg}
              src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`}
              alt={movie ? movie.original_title : "Img"}>
            </img>

            <div className={styles.movieDetails}>
              <h1 className={styles.title}>{movie ? movie.original_title : " "}</h1>
            
              <div className={styles.dateRating}>
                <span className={styles.ReleaseDate}>
                  {movie ? movie.release_date : ""}
                </span>

                <span className={styles.poster_rating}>
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
