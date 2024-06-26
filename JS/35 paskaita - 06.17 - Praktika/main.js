import GameCard from "./modules/GameCard.js";

// Read
fetch(`http://localhost:3000/videoGames`)
  .then(res => res.json())
  .then(games => {
    // console.log(games);

    games.forEach(game => {
      const gameDiv = new GameCard(game);
      document.querySelector('#games > div').appendChild(gameDiv);
    });
  });

// Create
document
  .querySelector('#games > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    // console.dir(e);
    const ete = e.target.elements;
    const gameData = {
      id: Date.now().toString(),
      name: ete.name.value,
      photo: ete.photo.value,
      description: ete.description.value,
      releaseDate: ete.releaseDate.value,
      developer: ete.developer.value,
      platform: ete.platform.value,
      genres: ete.genres.value.split(', ')
    };
    // console.log(gameData);

    const gameDiv = new GameCard(gameData);
    document.querySelector('#games > div').appendChild(gameDiv);

    fetch(`http://localhost:3000/videoGames`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(gameData)
    });

    e.target.reset();
  });