import React from "react";
import classes from "../styles/Header.module.css";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

export default function Header(props) {
  return (
    <div className={classes.header}>
      <MovieListHeading heading={props.heading} />
      <SearchBox />
    </div>
  );
}
