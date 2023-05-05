import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import HorizontalList from "../../MovieHorizontalList/HorizontalList";
// import styles from "../../MovieCard/Card.module.css";

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

  // Getting formatted runtime
  const getFormattedTime = (time) => {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    return `${hours} hr ${min} min`
  }

  // Getting formatted date
  const getFormattedDate = (date) => {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "June",
      7: "July",
      8: "Aug",
      9: "Sept",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };

    const newDate = date.split("-");
    const monthName = months[parseInt(newDate[1])];
    return `${monthName} ${newDate[2]}, ${newDate[0]}`;
  }

  // Getting formatted currency
  const getFormattedCurrency = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.movieDetailsContainer}>
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
              <p className={styles.tagline}>{movie ? movie.tagline : ""}</p>

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
                    {getFormattedDate(movie ? movie.release_date : "")}
                    {/* {movie ? movie.release_date : ""} */}
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

            {/* image */}
            <div className={styles.movieImg}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                alt=""
              />
            </div>
             
            {/* Details table */}
            <div className={styles.aboutMovie}>
              <div className={styles.overviewHeading}>
                <h1>Overview</h1>
                {/* <hr /> */}
                <p className={styles.description}>
                  {movie ? movie.overview : ""}
                </p>
              </div>
              
              <div className={styles.detailsTable}>
                <table>
                  <tbody>
                    <tr>
                      <td className={styles.tableHeading}>Status</td>
                      <td className={styles.tableData}>
                        {movie ? movie.status : ""}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Release Date</td>
                      <td className={styles.tableData}>
                      {getFormattedDate(movie ? movie.release_date : "")}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Budget</td>
                      <td className={styles.tableData}>
                        ${getFormattedCurrency(movie ? movie.budget : "")}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Revenue</td>
                      <td className={styles.tableData}>
                        ${getFormattedCurrency(movie ? movie.revenue : "")}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Runtime</td>
                      <td className={styles.tableData}>
                      {getFormattedTime(movie ? movie.runtime : "")}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Popularity</td>
                      <td className={styles.tableData}>
                        {movie ? movie.popularity.toFixed(1) : ""}
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableHeading}>Vote Count</td>
                      <td className={styles.tableData}>
                        {movie ? movie.vote_count : ""}
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <MovieSlider /> */}
          <HorizontalList />
        </div>
      </div>
    </>
  );
}
