import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const params = useParams();
  const ApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    test();
    window.scrollTo(0, 0); 
    // this window.scrollTo(0,0) is used to scroll to the top of the page
  }, []);

  // fetching the movie details
  // const getDetails = (movieId) => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${ApiKey}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  function test() {
    console.log("clicked");
    fetch(
      `https://api.themoviedb.org/3/movie/502356?language=en-US&api_key=c546b3a17abcfc1c6c61807d1a0d0cf9`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="containerd">
        <h1 className="details">Movie details {params.id}</h1>
        <button onClick={test}>click me</button>
      </div>
    </>
  );
}
