// console.log(5+1);
// console.log(3+8);
// console.log(9+12);

// function sudetis(sk1, sk2){
//   console.log(sk1+sk2);
// }
// sudetis(5, 1);
// sudetis(3, 8);
// sudetis(9, 12);

function sudetis(sk1, sk2){
  let suma = sk1 + sk2;
  // console.log(suma);
  return suma;
}
let suma0 = sudetis(5, 1);
console.log(suma0);
let suma1 = sudetis(3, 8);
console.log(suma1);
let bendraSuma = sudetis(suma0, suma1);
console.log(bendraSuma);

//  Kreipimasis į DOM
let mygtukas = document.querySelector('#test > button');
// console.log(mygtukas);
console.dir(mygtukas);
mygtukas.textContent += ' If You Dare';
mygtukas.addEventListener('click', mygtukoNuspaudimas);
function mygtukoNuspaudimas(){
  console.log('Paspaudei mygtuką');
  mygtukas.textContent = "I can't believe you've done that...";

  // let antraste = document.querySelector('#test');
  let antraste = mygtukas.parentElement.children[0];
  antraste.textContent = 'Keičiame HTML su JS';
  antraste.style.textAlign = 'center';
  antraste.style.fontSize = '50px';
  antraste.style.color = 'red';

  // sudėtinga bet tvarkinga
  let paveiksliukas = document.createElement('img');
  paveiksliukas.setAttribute('src', 'https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg');
  paveiksliukas.style.height = '300px';
  paveiksliukas.style.width = 'auto';
  antraste.parentElement.appendChild(paveiksliukas);

  // labai paprastas ir blogas
  // antraste.parentElement.innerHTML += "<img src='https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg' style='height:300px; width:auto'>";
}

// 1) Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą.
// 2) Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
// 3) Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...

function vardai(vardas, kartai){
  for(let i = 0; i < kartai; i++){
    console.log(i + '. ' + vardas);
  }
}
// vardai('Rokas', 10);
// vardai('Petras', 30);

function nuo_iki(nuo, iki){
  if(nuo > iki){
    for(let i = nuo; i >= iki; i--){
      console.log(i);
    }
  } else if(nuo < iki){
    for(let i = nuo; i <= iki; i++){
      console.log(i);
    }
  }
}
nuo_iki(8,13);
nuo_iki(15,6);