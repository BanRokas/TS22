export default class Calculator{
  constructor(calculator){
    this.calculator = calculator; // HTML elementas
    this.memory = null; // skaičius saugomas atmintyje
    this.visual = '0'; // skaičius rodomas ekrane
    this.action = null; // veiksmas, kurį norime atlikti su abiem
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
    this.renderVisual();
  }
  addAction(symbol){
    if(this.action){
      this.calculate();
    } else {
      this.memory = this.visual;
      this.visual = '0';
    }
    this.action = symbol;
  }
  calculate(){
    if(this.action === 'sum'){
      console.log(this.visual*1, this.memory*1);
      this.visual = this.visual*1 + this.memory*1;
    }
    // like veiksmai

    this.memory = this.visual;
    this.renderVisual();
    this.action = null;
  }
}