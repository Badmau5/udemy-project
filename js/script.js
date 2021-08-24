let numbersOfFilms = +prompt("Сколько фильмов выуже посмотрели?", "");

let personalMovieDB = {
  counter: numbersOfFilms,
  movies: {},
  actors: "",
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
  if (a && b != null && a && b != "" && a.length && b.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if(personalMovieDB.counter <= 10){
    console.log("Вы смотрели слишком мало фильмов!");
} else if(personalMovieDB.counter >= 30){
    console.log("Вы классический зритель");
} else if(personalMovieDB.counter > 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
