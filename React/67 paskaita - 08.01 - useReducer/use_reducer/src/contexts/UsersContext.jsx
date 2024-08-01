import { createContext, useState } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState([
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
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        addNewUser,
        removeUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export { UsersProvider };
export default UsersContext;