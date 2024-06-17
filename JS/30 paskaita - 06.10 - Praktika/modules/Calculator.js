export default class Calculator{
  constructor(calculator){
    this.calculator = calculator; // HTML elementas
    this.memory = null; // skaičius saugomas atmintyje
    this.visual = '0'; // skaičius rodomas ekrane
    this.action = null; // veiksmas, kurį norime atlikti su abiem
    this.lastAction = null;
  }

  renderVisual(){
    this.calculator.children[0].textContent = this.visual;
  }
  addNumber(nr){
    if(this.visual === '0' && nr === '0'){
      return;
    } else if(nr === '.' && this.visual.includes('.')){
      return;
    } else if(this.visual === '0' && nr !== '0' && nr !== '.') {
      this.visual = nr;
    } else {
      this.visual = (this.visual + nr).toString();
    }
    this.lastAction = 'addNumber';
    this.renderVisual();
  }
  addAction(symbol){
    if(this.action && this.lastAction !== 'addAction'){
      this.calculate();
    } else {
      this.memory = this.visual;
      this.visual = '0';
    }
    this.action = symbol;
    this.lastAction = 'addAction';
  }
  calculate(){
    if(this.action === 'sum'){
      // console.log(this.visual*1, this.memory*1);
      this.visual = this.memory*1 + this.visual*1;
    } else if(this.action === 'subtract'){
      this.visual = this.memory*1 - this.visual*1;
    } else if(this.action === 'multiply'){
      this.visual = this.memory*1 * this.visual*1;
    } else if(this.action === 'division'){
      this.visual = this.memory*1 / this.visual*1;
    } else if(this.action === 'modulus'){
      this.visual = this.memory*1 % this.visual*1;
    } else if(this.action === 'root'){
      this.visual = (this.memory*1) ** (1/(this.visual*1));
    } else if(this.action === 'power'){
      this.visual = (this.memory*1) ** this.visual*1;
    }
    this.visual = this.visual.toFixed(3);
    while(this.visual.at(-1) === '0'){
      this.visual = this.visual.slice(0,-1);
    }
    if(this.visual.at(-1) === '.'){
      this.visual = this.visual.slice(0,-1);
    }

    this.memory = this.visual;
    this.renderVisual();
    this.action = null;
    this.lastAction = 'calculate';
  }
  delete(what){
    if(what === 'visual'){
      this.visual = '0';
    } else if(what === 'all'){
      this.visual = '0';
      this.action = null;
      this.memory = null;
    } else if(what === 'last'){
      this.visual = this.visual.slice(0,-1);
    }
    this.renderVisual();
    this.lastAction = 'delete';
  }
  toggleSign(){
    if(this.visual.at(0) !== '-'){
      this.visual = '-'+this.visual;
    } else {
      this.visual = this.visual.slice(1);
    }
    this.renderVisual();
    this.lastAction = 'toggleSign';
  }
}
/* yra dar bėda kai:
    skaiciu suvedi
    pasirenki veiksmą
    kitą skaičių
    naujas veiksmas arba calculate
    ČIA rašant naują veiksmą vietoj skaičiau pasidaro nesamonė
*/