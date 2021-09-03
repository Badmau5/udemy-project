let personalMovieDB = {
  counter: 0,
  movies: {},
  actors: "",
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.counter = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.counter == "" ||
      personalMovieDB.counter == null ||
      isNaN(personalMovieDB.counter)
    ) {
      personalMovieDB.counter = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
      if (a && b != null && a && b != "" && a.length && b.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.counter <= 10) {
      console.log("Вы смотрели слишком мало фильмов");
    } else if (personalMovieDB.counter >= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.counter > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (private) {
    if (!private) {
      console.log(personalMovieDB.privat);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === "" || genre === null) {
        console.log("ВЫ ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
