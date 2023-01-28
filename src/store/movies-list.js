import React from "react";

const MovieListData = React.createContext({
  searchValue: "",
  moviesData: [],
  favouritesData: [],
  setFavouriteData: (movie) => {},
  removeFavouriteMovie: (movie) => {},
  enteredSearchValue: (value) => {},
  getMovieData: (data) => {},
});

export default MovieListData;
