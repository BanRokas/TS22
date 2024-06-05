document
  .querySelector('#names')
  .addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
    const ete = e.target.elements;
    const name = ete.name.value;
    const times = ete.times.valueAsNumber || 1;
    // console.log(name, times);
    const outputDiv = document.querySelector('#namesOutput');
    outputDiv.innerHTML = '';

    // for(let i = 0; i < times === NaN ? 1 : times === 0 ? 1 : times; i++){
    // let combo = name;
    for(let i = 0; i < times; i++){
      // console.log(combo);
      // combo+=name;

      // console.log(name.repeat(i+1));
      const par = document.createElement('p');
      par.textContent = name.repeat(i+1);
      outputDiv.appendChild(par);
    }
    e.target.reset();
  });

document
  .querySelector('#fizzBuzz')
  .addEventListener('submit', e => {
    e.preventDefault();
    const ete = e.target.elements;
    const from = ete.from.valueAsNumber;
    const to = ete.to.valueAsNumber;
    console.log(from, to);
    const outputDiv = document.querySelector('#fizzBuzzOutput');
    outputDiv.innerHTML = '';
    if(from > to){
      outputDiv.textContent = `Nuo negali būti mažesnis negu iki. Prašome pakeisti įvestis.`;
    } else {
      for(let i = from; i <= to; i++){
        const iterationDiv = document.createElement('div');
        if(i % 5 === 0 && i % 3 === 0){
          // console.log('FizzBuzz');
          iterationDiv.textContent = 'Fizz\nBuzz';
        } else if(i % 5 === 0){
          // console.log('Buzz');
          iterationDiv.textContent = 'Buzz';
        } else if(i % 3 === 0){
          // console.log('Fizz');
          iterationDiv.textContent = 'Fizz';
        } else {
          // console.log(i);
          iterationDiv.textContent = i;
        }
        outputDiv.appendChild(iterationDiv);
      }
      e.target.reset();
    }
  });
// Galima patobulinti, kad būtų galimybė nusirodyti Fizz ir Buzz reikšmes. (nebūtinai 3 ir 5)
// Galima patobulinti, kad antrosios įvesties atributo min reikšmė būtų vienu didesnė negu pirmosios įvesties įvesta reikšmė. Naudoti extra event. Google koks tai įvykis.

document
  .querySelector('#filmas')
  .addEventListener('submit', e => {
    e.preventDefault();
    console.dir(e);
    const ete = e.target.elements;
    const filmas = {
      pavadinimas: ete.name.value,
      plakatas: ete.thumbnail.value,
      aprasymas: ete.description.value,
      leidimoMetai: ete.releaseDate.value,
      autorius: ete.author.value,
      IMDB: ete.IMDB_score.valueAsNumber,
      eirinoKategorija: ete.eirinCategory.value
    };
    console.log(filmas);
    const filmuOutputDiv = document.querySelector('#filmuOutput');

    const cardDiv = document.createElement('div');

    const heading = document.createElement('h3');
    heading.textContent = filmas.pavadinimas;

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imageContainer');
    const image = document.createElement('img');
    image.setAttribute('src', filmas.plakatas);
    image.setAttribute('alt', `${filmas.pavadinimas} plakatas`);
    imageDiv.appendChild(image);

    const description = document.createElement('p');
    description.textContent = filmas.aprasymas;

    const extraInfoDiv = document.createElement('div');
    extraInfoDiv.classList.add('extraInfo');
    const releaseDate = document.createElement('span'); // 2024-05-15
    releaseDate.textContent = 'Leidimo metai: ' + filmas.leidimoMetai.slice(0,4);
    const author = document.createElement('span');
    author.textContent = 'Režisierius: ' + filmas.autorius;
    const imdbScore = document.createElement('span');
    imdbScore.textContent = 'IMDB: ' + filmas.IMDB;
    const eirinCategory = document.createElement('span');
    eirinCategory.textContent = 'Eirin: ' + filmas.eirinoKategorija;
    extraInfoDiv.append(releaseDate, author, imdbScore, eirinCategory);
    
    cardDiv.append(heading, imageDiv, description, extraInfoDiv);
    filmuOutputDiv.appendChild(cardDiv);

    e.target.reset();
  });