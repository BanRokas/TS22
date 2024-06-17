import GameCard from "./modules/GameCard.js";

// Read
fetch(`http://localhost:3000/videoGames`)
  .then(res => res.json())
  .then(games => {
    console.log(games);

    games.forEach(game => {
      const gameDiv = new GameCard(game);
      document.querySelector('#games > div').appendChild(gameDiv);
    });
  });