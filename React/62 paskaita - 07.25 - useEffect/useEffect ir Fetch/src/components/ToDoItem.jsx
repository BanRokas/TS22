const ToDoItem = ({ task, removeToDo }) => {
  return (
    <div className="toDoItem">
      <h3>{task.name}</h3>
      <p>Is Complete: {task.completed ? 'Yes' : 'No'}</p>
      <button 
        onClick={() => removeToDo(task.id)}
      >Delete</button>
    </div>
  );
}

export default ToDoItem;