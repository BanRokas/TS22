export function randomNumberTo(to){
  return Math.floor(Math.random()*to);
}
export function randomColor(){
  return `rgb(${randomNumberTo(256)},${randomNumberTo(256)},${randomNumberTo(256)})`
}
export function sudetis(sk1, sk2){
  return sk1 + sk2;
}