const divOutput = document.querySelector('#komponentuPvz');

class Paragraph{
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

// const par = document.createElement('p');
// par.textContent = 'Labas rytas';
// const par0 = document.createElement('p');
// par0.textContent = 'Pietų metas kada?';
// const par1 = document.createElement('p');
// par1.textContent = 'Mama, noriu miegot :(';

const par = new Paragraph('Labas rytas');
const par0 = new Paragraph('Pietų metas kada?');
const par1 = new Paragraph('Mama, noriu miegot :(');


divOutput.appendChild(par);
divOutput.appendChild(par0);
divOutput.appendChild(par1);