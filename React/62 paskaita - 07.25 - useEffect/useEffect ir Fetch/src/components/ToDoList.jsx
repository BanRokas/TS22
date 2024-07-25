import ToDoItem from "./ToDoItem";

const ToDoList = ({ data }) => {
  return (
    <div>
      <h2>My ToDos</h2>
      <div>
        {
          data.map(todo => 
            <ToDoItem 
              key={todo.id}
              task={todo}
            />
          )
        }
      </div>
    </div>
  );
}
 
export default ToDoList;