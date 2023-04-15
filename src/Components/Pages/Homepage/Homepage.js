import React from "react";
import "./Homepage.css";
import { useEffect, useState } from "react";

//importing react responsive csrousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import HorizontalList from "../../MovieHorizontalList/HorizontalList";
import HorizontalScroll from "../../Test";

export default function Homepage() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const ApiKey = "c546b3a17abcfc1c6c61807d1a0d0cf9";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setNowPlaying(data.results));
  }, []);

  
  // defining local variable
  // const popular = "POPULAR";
  // const topRated = "TOP RATED";
  // const upcoming = "Upcoming";

  return (
    <>
      <div className="Carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={false}
        >
          {nowPlaying.map((movie) => (
            <div className="posterContainer">
              <div className="posterImg">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
              </div>

              <div className="posterDetails">
                <h1 className="poster_title">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/movie/${movie.id}`}
                  >
                    {movie ? movie.original_title : ""}
                  </Link>
                </h1>

                <div className="poster_runtime">
                  <span className="ReleaseDate">
                    {movie ? movie.release_date : ""}
                  </span>

                  <span className="poster_rating">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffe042" }}
                    ></i>{" "}
                    {movie ? movie.vote_average : ""}
                  </span>

                  <div className="poster_desc">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <HorizontalScroll />

      {/* Rendering now playing movies */}
      
      {/* <div className="list-type">
        <div className='heading-see-all-box'>
          <h1 className="list-type-heading">NOW PLAYING
          </h1>
          <Link className="see-all" to="movie/now_playing">See All</Link>
        </div>
        
        <div className="now-Playing">
          {nowPlaying.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div> */}

      <HorizontalList movie_type={"now_playing"} />
      <HorizontalList movie_type={"upcoming"} />
      <HorizontalList movie_type={"popular"} />
    
    </>
  );
}
