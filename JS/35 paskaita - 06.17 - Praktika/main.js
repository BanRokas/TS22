fetch(`http://localhost:3000/videoGames`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });