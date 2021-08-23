let numbersOfFilms = +prompt('Сколько фильмов выуже посмотрели?', '');

let personalMovieDB = {
    counter: numbersOfFilms,
    movies: {},
    actors: '',
    genres: [],
    privat: false
};

let lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
    lastScore = prompt('На сколько оцените его?', ''),
    lastMovieA = prompt('Один из последних просмотренных фильмов?', ''),
    lastScoreA = prompt('На сколько оцените его?', '');


    personalMovieDB.movies[lastMovie] = lastScore;
    personalMovieDB.movies[lastMovieA] = lastScoreA;

    console.log(personalMovieDB);

