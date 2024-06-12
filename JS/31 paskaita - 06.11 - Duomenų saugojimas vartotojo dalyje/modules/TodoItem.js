export default class ToDoItem{
  constructor({id, name, completed}, del, update, toggleCompletion){
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.deleteFunc = del;
    this.updateFunc = update;
    this.toggleFunc = toggleCompletion;
    return this.render();
  }
  render(){
    const divEl = document.createElement('div');
    
    const par = document.createElement('p');
    par.textContent = this.name;

    /*
      button change status
      // redaguoti ekrane
      button edit
      // redaguoti ekrane
    */
    // button delete
    const delButton = document.createElement('button');
    delButton.textContent = 'delete';
    // func del ir išimti iš ekrano
    delButton.addEventListener('click', () => {
      this.deleteFunc(this.id);
      divEl.remove();
    });

    divEl.append(par, delButton);

    return divEl;
  }
}