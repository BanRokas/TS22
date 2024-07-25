import { useState } from "react";

import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const ToDo = () => {

  const [formInput, setFormInput] = useState('');

  const [toDos, setToDos] = useState([
    {
      id: '4a6sd156as1',
      name: 'Pavalgyti',
      completed: false
    },{
      id: '4a6sd156as2',
      name: 'Atsiprausti',
      completed: true
    },{
      id: '4a6sd156as3',
      name: 'Išsimiegoti',
      completed: false
    },{
      id: '4a6sd156as4',
      name: 'Pasportuoti',
      completed: false
    }
  ]);
  const addNewToDo = (newTask) => {
    // setToDos([...toDos, 'labas']);
    // setToDos([...toDos, false]);
    setToDos([...toDos, newTask]);
    // console.log(toDos);
  }
  const removeToDo = (id) => {
    setToDos(toDos.filter(el => el.id !== id));
  }

  return (
    <section>
      <ToDoForm 
        formInput={formInput}
        setFormInput={setFormInput}
        addNewToDo={addNewToDo}
      />
      <ToDoList
        data={toDos}
        removeToDo={removeToDo}
      />
    </section>
  );
}
 
export default ToDo;