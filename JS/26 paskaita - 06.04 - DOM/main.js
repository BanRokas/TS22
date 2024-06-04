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