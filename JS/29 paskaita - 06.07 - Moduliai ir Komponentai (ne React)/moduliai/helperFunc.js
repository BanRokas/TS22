const randomNumberTo = (to) => {
  return Math.floor(Math.random() * to);
}
function randomColor() {
  return `rgb(${randomNumberTo(256)},${randomNumberTo(256)},${randomNumberTo(256)})`;
}
function sudetis(sk1, sk2) {
  return sk1 + sk2;
}

export default randomNumberTo;
export { randomColor, sudetis };