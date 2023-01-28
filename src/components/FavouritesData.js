import React, { useContext } from "react";
import MovieListData from "../store/movies-list";
import FavouritesCard from "./FavouritesCard";
import classes from "../styles/FavouritesData.module.css";

export default function FavouritesData() {
  const contextData = useContext(MovieListData);

  return (
    <ul className={classes["movie-container"]}>
      {contextData.favouritesData.map((curr) => {
        return <FavouritesCard key={curr.imdbID} movie={curr} />;
      })}
    </ul>
  );
}
