import { useEffect } from "react";

const ToDoItem = ({ task, removeToDo, changeStatus }) => {

  useEffect(()=>{
    console.log(task.name, 'užsikrovė / mounted');

    return () => {
      console.log(task.name, 'buvo ištrintas / unmounted');
    }
  },[]);

  return (
    <div className="toDoItem">
      <h3
        className={task.completed ? "line_through" : ""}
      >{task.name}</h3>
      <p
        onClick={() => changeStatus(task.id)}
      >Is Complete: {task.completed ? 'Yes' : 'No'}</p>
      <button 
        onClick={() => removeToDo(task.id)}
      >Delete</button>
    </div>
  );
}

export default ToDoItem;