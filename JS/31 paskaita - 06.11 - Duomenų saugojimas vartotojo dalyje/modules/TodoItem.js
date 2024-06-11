export default class ToDoItem{
  constructor({id, name, completed}, allTasks){
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.allTasks = allTasks;
    return this.render();
  }
  render(){
    const divEl = document.createElement('div');
    
    const par = document.createElement('p');
    par.textContent = this.name;

    /*
      button change status
      button delete
      button edit
    */

    divEl.append(par);

    return divEl;
  }
  delete(id){
    // filtruoti allTasks be nurodyto id
    // localStorage keisti
    // išimti iš ekrano
  }
  update(){} // jei norit ir sugebat
  toggleCompletion(id){
    // map allTasks keičiant nurodyto id completed
    // localStorage keisti
    // redaguoti ekrane
  }
}