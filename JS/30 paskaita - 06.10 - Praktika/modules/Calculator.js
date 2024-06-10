class Calculator{
  constructor(){
    this.memory = null; // skaičius saugomas atmintyje
    this.visual = 0; // skaičius rodomas ekrane
    this.action = null; // veiksmas, kurį norime atlikti su abiem
  }

  renderVisual(){

  }
  addNumber(nr){
    if(this.visual === 0 && nr === 0){
      return;
    } else if(this.visual === 0 && nr !== 0 && Number.isInteger(nr)) {
      this.visual = nr;
    } else {
      this.visual = (this.visual + nr).toString();
    }
    this.renderVisual();
  }
  addAction(){

  }
}