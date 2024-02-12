"// js";

const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);
const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  let movieFound = null;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      movieFound = movies[i];
      break;
    }
  }

  if (movieFound) {
    res.status(200).json(movieFound);
  } else {
    res.status(404).send("Not Found");
  }
};

app.get("/api/movies/:id", getMoviesById);
module.exports = app;
