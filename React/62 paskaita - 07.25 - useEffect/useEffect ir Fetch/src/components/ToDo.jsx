import { useState } from "react";

import ToDoList from "./ToDoList";

const ToDo = () => {

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

  return (
    <section>
      <ToDoList
        data={toDos}
      />
    </section>
  );
}
 
export default ToDo;