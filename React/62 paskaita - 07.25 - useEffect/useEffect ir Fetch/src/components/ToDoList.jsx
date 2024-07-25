import ToDoItem from "./ToDoItem";

const ToDoList = ({ data, removeToDo, changeStatus }) => {
  return (
    <div className="toDoList">
      <h2>My ToDos</h2>
      <div>
        {
          data.map(todo => 
            <ToDoItem 
              key={todo.id}
              task={todo}
              removeToDo={removeToDo}
              changeStatus={changeStatus}
            />
          )
        }
      </div>
    </div>
  );
}
 
export default ToDoList;