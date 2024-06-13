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
    const liEl = document.createElement('li');
    if(this.completed){
      liEl.classList.add('done');
    }

    liEl.addEventListener('click', () => {
      liEl.classList.toggle('done');
      this.toggleFunc(this.id);
    });
    
    const head = document.createElement('h3');
    head.textContent = this.name;

    /*
      button edit
      // redaguoti ekrane
    */

    // button/icon delete
    const delIcon = document.createElement('i');
    delIcon.classList.add('bi', 'bi-trash-fill');
    // func del ir išimti iš ekrano
    delIcon.addEventListener('click', () => {
      this.deleteFunc(this.id);
      liEl.remove();
    });

    liEl.append(head, delIcon);

    return liEl;
  }
}