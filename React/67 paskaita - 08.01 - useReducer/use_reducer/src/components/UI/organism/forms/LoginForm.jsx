import { useContext, useState } from "react";
import UsersContext from "../../../../contexts/UsersContext";

import InputField from "../../molecules/InputField/InputField";
import Input from "../../atoms/Input/Input";

const LoginForm = () => {

  const { users } = useContext(UsersContext);

  const [formInputs, setFormInputs] = useState({
    name: '',
    password: ''
  });
  const onFormInputChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    const loggedIn = users.find(user => 
      user.name === formInputs.name &&
      user.password === formInputs.password    
    );
    if(loggedIn){
      console.log('prisijungė');
      // prijungiame
      // naviguojame
    } else {
      console.log('neprisijungė');
      // ekrane išvedam error
    }
  }

  return (
    <form onSubmit={formSubmit}>
      <InputField
        text="Name:"
        type="text"
        name="name" id="name"
        placeholderText="Enter your user name..."
        value={formInputs.name}
        onChangeF={onFormInputChange}
      />
      <InputField
        text="Password:"
        type="password"
        name="password" id="password"
        placeholderText="Enter your password..."
        value={formInputs.password}
        onChangeF={onFormInputChange}
      />
      <Input
        type="submit"
        value="Login"
      />
    </form>
  );
}
 
export default LoginForm;