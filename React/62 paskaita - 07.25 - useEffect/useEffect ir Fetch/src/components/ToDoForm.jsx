const ToDoForm = ({ formInput, setFormInput, addNewToDo }) => {

  const formSubmit = (e) => {
    e.preventDefault();
    addNewToDo({
      id: Date.now().toString(),
      name: formInput,
      completed: false
    });
    setFormInput('');
  }

  return (
    <div className="toDoForm">
      <h2>Add New To Do</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="New task name..."
          required
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <input
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
}
 
export default ToDoForm;