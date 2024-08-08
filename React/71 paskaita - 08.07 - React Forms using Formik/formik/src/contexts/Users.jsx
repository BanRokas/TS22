import { createContext, useReducer, useState, useEffect } from "react";

const UsersContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'getAll':
      return action.allUsers;
    case 'addNew':
      fetch(`http://localhost:8080/users`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.newUser)
      })
      return [...state, action.newUser];
    default:
      return state;
  }
}

const UsersProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState('');
  const [users, setUsers] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers({ type: 'getAll', allUsers: data }));
  },[]);

  return (
    <UsersContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        users,
        setUsers
      }}
    >
      { children }
    </UsersContext.Provider>
  )
}

export { UsersProvider };
export default UsersContext;