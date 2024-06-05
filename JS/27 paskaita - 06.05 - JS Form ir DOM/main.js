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