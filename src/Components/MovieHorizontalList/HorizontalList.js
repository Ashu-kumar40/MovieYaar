import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorizontalList.css";
import Card from "../MovieCard/Card";
import Slider from "react-slick";

export default function HorizontalList({ movie_type }) {
  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState(movie_type);
  const ApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // fetching the movies list
    const getData = () => {
      setMovieType(movie_type);
      fetch(
        `https://api.themoviedb.org/3/movie/${
          movieType ? movieType : "popular"
        }?api_key=${ApiKey}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results));
    };
    getData();
  }, [movie_type, movieType, ApiKey]);

  // adding functionality to the slide btn
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      {/* Rendering Latest movies */}
      <div className="list-type-container">
        <div className="list-type">
          <div className="heading-see-all-box">
            <h1 className="list-type-heading">
              {(movieType ? movieType : "recommended").toUpperCase()}
            </h1>
            <Link className="see-all" to={`movie/${movieType}`}>
              See All
            </Link>
          </div>

          <div id="slideLeft" className="now-Playing">
            <Slider {...settings}>

              {movieList?.map((movie) => (
                  <Card movie={movie} />
                ))}

            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
