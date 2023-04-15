import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './HorizontalList.css'
import Card from "../MovieCard/Card";

export default function HorizontalList({movie_type}) {

  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState(movie_type);
  const {type} = useParams()
  const ApiKey = "c546b3a17abcfc1c6c61807d1a0d0cf9";

  useEffect(() => (
    getData()
  ), [])

  useEffect(() => (
    getData()
  ), [movieType])



  // fetching the movies list
  const getData = () => {
    setMovieType(movie_type);
    fetch(`https://api.themoviedb.org/3/movie/${movieType ? movieType : "popular"}?api_key=${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }

  // adding functionality to the slide btn

  return (
    <>
      {/* Rendering Latest movies */}
      <div className="list-type-container">
        <div className="list-type">
          <div className='heading-see-all-box'>
            <h1 className="list-type-heading">{(movieType ? movieType : "LATEST").toUpperCase()}
            </h1>
            <Link className="see-all" to={`movie/${movieType}`}>See All</Link>
          </div>
          
          <div id="slideLeft" className="now-Playing">
            <button className="slide-btn">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
            </button>

            {movieList.map((movie) => (
              <Card movie={movie} />
            ))}

            <button id="slideRight" className="slide-btn">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}
