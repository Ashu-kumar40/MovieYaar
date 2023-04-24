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
          <div className={styles.posterDetails}>
            {console.log(movie)}
            <img
              className={styles.movieBanner}
              src={`https://image.tmdb.org/t/p/original/${
                movie && movie.backdrop_path
              }`}
              alt=""
            />

            <div className={styles.movie_details}>
              <h1 className={styles.posterTitle}>
                {movie ? movie.original_title : ""}
              </h1>
              <p className={styles.description}>
                {movie ? movie.overview : ""}
              </p>

              <div className={styles.featureContainer}>
                <span className={styles.movieFeatureHeading}>Genres: </span>
                {movie &&
                  movie.genres.map((genre) => (
                    <div className={styles.movieFeature} key={genre.id}>
                      {genre.name}
                    </div>
                  ))}
              </div>

              <div className={styles.featureContainer}>
                <span className={styles.movieFeatureHeading}>Languages: </span>
                {movie &&
                  movie.spoken_languages.map((lang) => (
                    <span className={styles.movieFeature} key={lang.id}>
                      {lang.english_name}
                    </span>
                  ))}
              </div>

              <div className={styles.featureContainer}>
                <div className={styles.releaseDate}>
                  <span className={styles.movieFeatureHeading}>
                    Release Date:{" "}
                  </span>
                  <span className={styles.movieFeature}>
                    {movie ? movie.release_date : ""}
                  </span>
                </div>
                <div className={styles.movie_rating}>
                  <i class="fa-solid fa-star" style={{ color: "#ffe042" }}></i>{" "}
                  {movie ? movie.vote_average.toFixed(1) : ""}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.about}>
            <div className={styles.movieImg}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                alt=""
              />
            </div>
            <div className="aboutMovie"></div>
          </div>
        </div>
      </div>
    </>
  );
}
