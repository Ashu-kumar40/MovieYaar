import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styles from "../../MovieCard/Card.module.css";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const params = useParams();
  const ApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // fetching the movie details
    const getDetails = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=${ApiKey}`
      )
        .then((res) => res.json())
        .then((data) => setMovie(data));
    };
    getDetails();
    window.scrollTo(0, 0);
    // this window.scrollTo(0,0) is used to scroll to the top of the page
  }, [ApiKey, params.id]);

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.details}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/original/${
              movie && movie.poster_path
            }`}
            alt=""
          />
          <div className="posterDetails">
            <img
              className={styles.movieBanner}
              src={`https://image.tmdb.org/t/p/original/${
                movie && movie.backdrop_path
              }`}
              alt=""
            />
            <h1 className="poster_title">
              {movie ? movie.original_title : ""}
            </h1>
          </div>
        </div>
        <h1>Movie details {params.id && console.log(movie)}</h1>
      </div>
    </>
  );
}
