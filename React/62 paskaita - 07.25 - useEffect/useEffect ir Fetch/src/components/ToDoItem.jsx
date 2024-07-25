const ToDoItem = ({ task }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>Is Complete: {task.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ToDoItem;