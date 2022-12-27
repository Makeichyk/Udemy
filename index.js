const numbersOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

personalMovieDB.movies[
  prompt("Один из последних фильмов что вы смотрели?", "")
] = prompt("На сколько его оцените по 10-бальной системе?", "");
personalMovieDB.movies[
  prompt("Один из последних фильмов что вы смотрели?", "")
] = prompt("На сколько его оцените по 10-бальной системе?", "");
