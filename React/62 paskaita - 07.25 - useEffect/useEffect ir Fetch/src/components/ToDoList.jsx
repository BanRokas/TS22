import ToDoItem from "./ToDoItem";

const ToDoList = ({ data, removeToDo }) => {
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
            />
          )
        }
      </div>
    </div>
  );
}
 
export default ToDoList;