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

document
  .querySelector('#showNewMovieModal')
  .addEventListener('click', () => {
    document
      .querySelector('#newMovieModal')
      .showModal();
  });

document
  .querySelector('#newMovieModal > .upTopAbs')
  .addEventListener('click', e => {
    console.dir(e.target);
    e.target.previousElementSibling.reset();
    e.target.parentElement.close();
  });

document
  .querySelector('#newMovieForm')
  .addEventListener('submit', e => {
    e.preventDefault();
    const ete = e.target.elements;
    // console.log(ete);
    const formInputs = {
      id: Date.now().toString(),
      title: ete.title.value,
      releaseYear: ete.releaseYear.valueAsDate.getFullYear(),
      eirinCategory: ete.eirinCategory.value,
      length: ete.duration.valueAsNumber,
      IMDB:{
        totalScore: ete.imdbScore.valueAsNumber
      },
      photos:{
        poster: [ete.thumbnail.value]
      },
      videos:{
        trailers: [ete.trailer.value]
      },
      description: ete.description.value,
      genres: [...ete.genres.children].filter(el => el.selected).map(el => el.value)
    }
    // console.log(formInputs);

    const cardDiv = new MovieCard(formInputs);
    document.querySelector('#moviesTP').appendChild(cardDiv);

    fetch(`http://localhost:3000/movies`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formInputs)
    });

    e.target.reset();
    e.target.parentElement.close();
  });