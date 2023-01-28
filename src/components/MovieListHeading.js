import React from "react";
import classes from "../styles/MovieListHeading.module.css";

export default function MovieListHeading(props) {
  return <h1 className={classes.heading}>{props.heading}</h1>;
}
