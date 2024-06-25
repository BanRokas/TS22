import MovieCard from "./modules/movieCard.js";

// READ
fetch(`http://localhost:3000/movies`)
  .then(res => res.json())
  .then(movies => {
    // sukame ciklą per visus filmus
    movies.forEach(movie => {
      console.log(movie);

      // susikuriame HTML div elementą to vieno filmo
      const cardDiv = new MovieCard(movie);

      // tą vieno filmo div elementą įdedame į ekraną
      document.querySelector('#moviesTP').appendChild(cardDiv);
    });
  })
  .catch(err => console.error(err));