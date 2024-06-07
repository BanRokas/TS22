export default class Image{
  // constructor(url, alt){
  constructor({ url, alt }){
    this.url = url;
    this.alt = alt;
    return this.render();
  }
  render(){
    const image = document.createElement('img');
    image.setAttribute('src', this.url);
    image.setAttribute('alt', this.alt);
    return image;
  }
}