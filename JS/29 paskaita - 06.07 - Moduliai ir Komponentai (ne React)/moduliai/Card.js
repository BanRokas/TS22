import Title4 from "./Heading.js";
import Image from "./Image.js";
import Paragraph from "./Paragraph.js";

export default class Card{
  constructor({ title, paragraph, image }){
    this.title1 = title;
    this.paragraph = paragraph;
    this.image = image;
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    div.classList.add('card');

    const title2 = new Title4('3', this.title1);

    // const image = new Image(this.image.url, this.image.alt);
    const image = new Image(this.image);

    const par = new Paragraph(this.paragraph);

    div.append(title2, image, par);
    return div;
  }
}