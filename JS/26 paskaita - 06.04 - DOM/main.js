// document.createElement('p');
// document.append(node0, node1, node2...);
// document.appendChild(node);
// document.prepend(node0, node1, node2...);

// DOM basic pvz
const test0_Sec = document.querySelector('#test0');
console.dir(test0_Sec);

// blogasis būdas
test0_Sec.innerHTML += `<h3>Testuojamės bad</h3>`;
test0_Sec.innerHTML += `<img src="https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png" alt="Stan Pines from Gravity Falls" class="smallImage">`;
// gerasis būdas
const antraste0 = document.createElement('h3');
// const antraste0Text = document.createTextNode('Testuojamės good');
// antraste0.appendChild(antraste0Text);
antraste0.textContent = 'Testuojamės good';
// test0_Sec.appendChild(antraste0);
const image0 = document.createElement('img');
image0.setAttribute('src', 'https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png');
image0.setAttribute('alt', 'Stan Pines from Gravity Falls');
image0.classList.add('smallImage');
// test0_Sec.appendChild(image0);
test0_Sec.append(antraste0, image0);

const cardSection = document.querySelector('#card');


const cardDiv = document.createElement('div');
cardDiv.classList.add('cardLandscape');

const heading3 = document.createElement('h3');
heading3.textContent = 'Card name';

const innerCardDiv = document.createElement('div');
const cardImage = document.createElement('img');
cardImage.setAttribute('src', 'https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png');
cardImage.setAttribute('alt','Stan Pines');
innerCardDiv.appendChild(cardImage);

const par = document.createElement('p');
par.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, fugit! Porro ullam quibusdam voluptatum obcaecati voluptatibus magni error saepe quos eligendi cumque, excepturi culpa a amet suscipit voluptas velit recusandae.';

cardDiv.append(heading3, innerCardDiv, par);
cardSection.appendChild(cardDiv);

cardDiv.addEventListener('click', () => {
  cardDiv.classList.toggle('cardLandscape');
  cardDiv.classList.toggle('cardPortrait');
});

const sarasoSec = document.querySelector('#generateList');

const list = document.createElement('ol');
// for(let i = 0; i < 10; i++){
//   const li = document.createElement('li');
//   li.textContent = 'labas :)';
//   list.appendChild(li);
// }
const gyvunai = ['<b>gyvatė</b>', 'žirafa', 'vilkas', 'šuo', 'katė', 'pelė', 'žiurkėnas', 'žuvelė', 'tinginys', 'liūtas', 'bezdžionė'];
gyvunai.forEach(gyvunas => {
  const li = document.createElement('li');
  // li.innerHTML = gyvunas; // BLOGAI
  li.textContent = gyvunas;
  // li.append(gyvunas);
  list.appendChild(li);
});
sarasoSec.appendChild(list);

// const sections = document.querySelectorAll('section');
// console.log(sections);
// sections.forEach()
document.querySelectorAll('section').forEach(section => {
  console.dir(section);
  section.classList.add('positionRelative');

  const button = document.createElement('button');
  button.textContent = 'Slėpti';
  button.classList.add('positionAbsolute', 'top0', 'right0');
  button.addEventListener('click', () => {
    [...section.children].forEach(child => {
      child.classList.toggle('displayNone');
    });
    // section.firstElementChild.classList.remove('displayNone'); // norint palikti pirmąjį elementą neslepiamą
    button.classList.remove('displayNone');
    if(button.textContent === 'Slėpti'){
      button.textContent = 'Rodyti';
    } else {
      button.textContent = 'Slėpti';
    }
  });

  section.appendChild(button);
});