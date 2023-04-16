import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './List.css'
import Card from "../MovieCard/Card";

export default function MovieList() {

  const [movieList, setMovieList] = useState([]);
  const {type} = useParams()
  const ApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => (
    getData()
  ), [])

  useEffect(() => (
    getData()
  ), [type])



  // fetching the movies list
  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }

  return (
    <>
      <div className="movie-container">
        
        <h1 className="list-heading">{(type ? type : "POPULAR").toUpperCase()}
        </h1>

        <div className="movie-list">
        {
          movieList.map((movie) => (
            <Card movie={movie} if=d />
            ))
        }
        </div> 
      </div>
    </>
  );
}
