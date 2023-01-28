import React, { useContext } from "react";
import MovieListData from "../store/movies-list";
import classes from "../styles/MovieList.module.css";
import MovieCard from "./MovieCard";

// Title, Year, imdbID, Type, Poster
export default function MovieList() {
  const contextData = useContext(MovieListData);

  // Title, Year, imdbID, Type, Poster

  return (
    <>
      <ul className={classes["movie-container"]}>
        {contextData.moviesData
          .filter((curr) => curr.Poster !== "N/A")
          .map((curr) => {
            return <MovieCard key={curr.imdbID} movie={curr} />;
          })}
      </ul>
    </>
  );
}
