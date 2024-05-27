console.groupCollapsed('kartu pamoka');
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
console.groupEnd();

console.group('CAO kartu');
// CAO
// 1) Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.
function uzd1(vardas, amzius){
  // alert(vardas);
  console.log(vardas);
}
uzd1('Rokas', 21);
uzd1('Petras');
uzd1('Jonas');

// 2) Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
function uzd2(){
  let skaicius = Math.random()*4+1 // 1.000004 -> 4.999996
  return skaicius;
}
console.log(uzd2());
/*
  Math.round()
  0    -> 0.49999 => 0
  0.5  -> 1.49999 => 1
  1.5  -> 2.49999 => 2
  2.5  -> 2.99999 => 3
*/

// 3) Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių.
function uzd3(vardas, pavarde){
  let zodis1Ilgis = vardas.length;
  let zodis2Ilgis = pavarde.length;
  let bendrasIlgis = zodis1Ilgis + zodis2Ilgis;
  return bendrasIlgis;
  // return vardas.length + pavarde.length;
}
let ats3 = uzd3('Rokas','Ban');
console.log(ats3);

// 4) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę;
let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function uzd4(indeksas){
  return abc[indeksas-1];
}

console.log(uzd4(5));
// console.log(uzd4(0));
console.log(uzd4(20));
console.log(uzd4(1));


console.groupEnd();