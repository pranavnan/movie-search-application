import React, { useContext, useRef } from "react";
import MovieListData from "../store/movies-list";
import classes from "../styles/SearchBox.module.css";

export default function SearchBox() {
  const contextData = useContext(MovieListData);
  const enteredData = useRef();

  function clickHandler(e) {
    e.preventDefault();
    contextData.enteredSearchValue(enteredData.current.value);
  }

  return (
    <div className={classes.container}>
      <input type="text" placeholder="Movie Name" ref={enteredData} />
      <button onClick={clickHandler}>🔎</button>
    </div>
  );
}
