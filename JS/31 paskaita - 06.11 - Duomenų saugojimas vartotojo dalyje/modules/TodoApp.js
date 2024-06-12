import ToDoItem from "./TodoItem.js";

export default class TodoApp{
  constructor(todoEl){
    this.todoEl = todoEl;
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);

    this.formSubmit();
    this.loadTasks();
  }

  formSubmit(){
    this.todoEl.firstElementChild.addEventListener('submit', e => {
      e.preventDefault();
      if(
        e.target.elements.task.value.trim().length < 4 ||
        e.target.elements.task.value.trim().length > 100
      ){
        this.todoEl.children[1].textContent = `Task gotta be longer than 4 symbols and shorter than 100.`;
      } else {
        this.todoEl.children[1].textContent = ``;
        this.addTask(e.target.elements.task.value.trim());
      }
      e.target.reset();
    });
  }
  addTask(value){
    const newTask = {
      id: Date.now(),
      name: value,
      completed: false
    };
    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    const newTaskNode = new ToDoItem(newTask, this.delete, this.update, this.toggleCompletion);
    this.todoEl.children[2].appendChild(newTaskNode);
  }
  loadTasks(){
    this.tasks.forEach(el => {
      const newTaskNode = new ToDoItem(el, this.delete, this.update, this.toggleCompletion);
      this.todoEl.children[2].appendChild(newTaskNode);
    });
  }
  delete(id){
    console.log(this);

    // filtruoti this.tasks be nurodyto id
    this.tasks = this.tasks.filter(task => task.id !== id);
    // localStorage keisti
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  update(id){} // jei norit ir sugebat
  toggleCompletion(id){
    // map this.tasks keičiant nurodyto id completed
    this.tasks = this.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    // localStorage keisti
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}