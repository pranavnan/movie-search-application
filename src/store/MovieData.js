import React, { useEffect, useState } from "react";
import MovieListData from "./movies-list";

// Title, Year, imdbID, Type, Poster

export default function MovieData(props) {
  const [searchValue, setSearchValue] = useState("john wick");
  const [moviesData, setMoviesData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);

  function enteredSearchValue(value) {
    setSearchValue(value);
  }

  useEffect(() => {
    const getMovieData = async function (searchValue) {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=44a9ce37`;

      const response = await fetch(url);
      const moviesData = await response.json();

      if (moviesData.Search) {
        setMoviesData(moviesData.Search);
      }
    };
    getMovieData(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("FavouritesData", JSON.stringify(items));
  };

  function setEnteredFavouriteData(movie) {
    if (
      favouritesData.filter((curr) => curr.imdbID === movie.imdbID).length > 0
    ) {
      return;
    }
    setFavouritesData((prev) => prev.concat(movie));
    saveToLocalStorage([...favouritesData, movie]);
  }

  function removeFavouriteMovie(movie) {
    const newFavourites = favouritesData.filter((curr) => {
      return curr.imdbID !== movie.imdbID;
    });

    setFavouritesData(newFavourites);

    console.log(newFavourites);

    saveToLocalStorage(newFavourites);
  }

  useEffect(() => {
    const savedData = localStorage.getItem("FavouritesData");
    if (savedData) {
      setFavouritesData(JSON.parse(savedData));
    }
  }, []);

  const valueObj = {
    searchValue: searchValue,
    moviesData: moviesData,
    favouritesData: favouritesData,
    removeFavouriteMovie: removeFavouriteMovie,
    setFavouriteData: setEnteredFavouriteData,
    enteredSearchValue: enteredSearchValue,
  };

  return (
    <MovieListData.Provider value={valueObj}>
      {props.children}
    </MovieListData.Provider>
  );
}
