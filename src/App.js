import "./App.css";
import React from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import MovieData from "./store/MovieData";
import FavouritesData from "./components/FavouritesData";
import classes from "./styles/MovieListHeading.module.css";

function App() {
  // Title, Year, imdbID, Type, Poster
  return (
    <MovieData>
      <Header heading="Movies" />
      <div>
        <MovieList />
      </div>
      <h1 className={classes.heading}>Favourites</h1>
      <div>
        <FavouritesData />
      </div>
    </MovieData>
  );
}

export default App;
