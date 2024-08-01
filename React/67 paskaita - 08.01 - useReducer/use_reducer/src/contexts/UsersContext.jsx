import { createContext, useState, useReducer } from "react";

const UsersContext = createContext();

const reducerFunction = (state, action) => {
  switch(action.type){
    case 'prideti':
      return [...state, action.newUser];
    default:
      console.log('nera tokio veiksmo');
      return state;
  }
}

const UsersProvider = ({ children }) => {

  const [users, setUsers] = useReducer(reducerFunction, [
    {
      id: "654dfs651",
      name: "Petras",
      password: "labas"
    },{
      id: "654dfs652",
      name: "Jonas",
      password: "ate"
    }
  ]);
  /* const [users, setUsers] = useState([
  //   {
  //     id: "654dfs651",
  //     name: "Petras",
  //     password: "labas"
  //   },{
  //     id: "654dfs652",
  //     name: "Jonas",
  //     password: "ate"
  //   }
  // ]);*/

  // const addNewUser = (newUser) => {
  //   setUsers([...users, newUser]);
  // };
  // const removeUser = (id) => {
  //   setUsers(users.filter(user => user.id !== id));
  // };

  return (
    <UsersContext.Provider
      value={{
        users,
        // addNewUser,
        // removeUser
        setUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export { UsersProvider };
export default UsersContext;