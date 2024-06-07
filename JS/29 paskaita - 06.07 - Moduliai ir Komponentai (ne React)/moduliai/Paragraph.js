export default class Paragraph{
  constructor(text){
    this.text = text;
    return this.render();
  }
  render(){
    const par = document.createElement('p');
    par.textContent = this.text;
    return par;
  }
}