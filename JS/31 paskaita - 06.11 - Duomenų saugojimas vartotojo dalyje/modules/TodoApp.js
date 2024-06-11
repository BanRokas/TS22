import ToDoItem from "./todoItem.js";

export default class TodoApp{
  constructor(todoEl){
    this.todoEl = todoEl;
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
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

    const newTaskNode = new ToDoItem(newTask, this.tasks);
    this.todoEl.children[2].appendChild(newTaskNode);
  }
  loadTasks(){
    this.tasks.forEach(el => {
      const newTaskNode = new ToDoItem(el, this.tasks);
      this.todoEl.children[2].appendChild(newTaskNode);
    });
  }
}