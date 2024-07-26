import { useState, useEffect } from "react";

import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const ToDo = () => {

  const [formInput, setFormInput] = useState('');

  const [toDos, setToDos] = useState([]);
  const addNewToDo = (newTask) => {
    // setToDos([...toDos, 'labas']);
    // setToDos([...toDos, false]);
    setToDos([...toDos, newTask]);
    // console.log('add funkcijoje', toDos);
    fetch(`http://localhost:8080/todos`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(normalRes => console.log(normalRes))
      .catch(err => console.log(err))
  }
  // ekvivalentus - componentDidUpdate jeigu keitėsi toDos state'as
  // useEffect(()=>{
  //   console.log('efekte', toDos);
  // }, [toDos]);
  const removeToDo = (id) => {
    setToDos(toDos.filter(el => el.id !== id));
    fetch(`http://localhost:8080/todos/${id}`,{
      method: "DELETE"
    });
  }
  const changeStatus = (id) => {
    setToDos(toDos.map(el => {
      if( id === el.id ){
        fetch(`http://localhost:8080/todos/${id}`,{
          method: "PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ completed: !el.completed })
        });
        return {
          id: el.id,
          name: el.name,
          completed: !el.completed
        }
      } else {
        return el;
      }
    }));
  }

  // ekvivalentus - componentDidMount
  useEffect(() => {
    // console.log('vykdosi ToDo komponento užkrovimas');
    fetch(`http://localhost:8080/todos`)
      .then(res => res.json())
      .then(data => setToDos(data));
  }, []);

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
        changeStatus={changeStatus}
      />
    </section>
  );
}
 
export default ToDo;