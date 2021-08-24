let numbersOfFilms;

function start() {
  numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numbersOfFilms == "" ||
    numbersOfFilms == null ||
    isNaN(numbersOfFilms)
  ) {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
  counter: numbersOfFilms,
  movies: {},
  actors: "",
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a && b != null && a && b != "" && a.length && b.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.counter <= 10) {
    console.log("Вы смотрели слишком мало фильмов");
  } else if (personalMovieDB.counter >= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.counter > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(private) {
  if (!private) {
    console.log(personalMovieDB.privat);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

console.log(personalMovieDB);
