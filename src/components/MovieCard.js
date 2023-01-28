import React, { useContext, useState } from "react";
import MovieListData from "../store/movies-list";
import classes from "../styles/MovieCard.module.css";

// Title, Year, imdbID, Type, Poster
export default function MovieCard(props) {
  const [isHover, setIsHover] = useState(false);

  const contextData = useContext(MovieListData);

  function mouseEnteredHandler(e) {
    setIsHover(true);
  }

  function mouseLeaveHandler(e) {
    setIsHover(false);
  }

  function buttonClickHandler(e) {
    e.preventDefault();
    contextData.setFavouriteData(props.movie);
  }

  return (
    <li
      className={classes["list-item"]}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnteredHandler}
    >
      <img src={props.movie.Poster} alt="movie-poster" />
      {isHover && (
        <button onClick={buttonClickHandler}>Add To Favourite</button>
      )}
    </li>
  );
}
