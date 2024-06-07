export default class Heading{
  constructor(size, text){
    this.size = size;
    this.text = text;
    return this.render();
  }
  render(){
    const heading = document.createElement(`h${this.size}`);
    heading.textContent = this.text;
    return heading;
  }
}