import { useContext, useState } from "react";
import UsersContext from "../../../../contexts/UsersContext";
import PageLoaderContext from "../../../../contexts/PageLoader";

import InputField from "../../molecules/InputField/InputField";
import Input from "../../atoms/Input/Input";

const LoginForm = () => {

  const { users, setLoggedInUser } = useContext(UsersContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  const [loginError, setLoginError] = useState(false);
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
      setLoggedInUser(loggedIn);
      setPageLoader('home');
    } else {
      console.log('neprisijungė');
      setLoginError(true);
    }
  }

  return (
    <>
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
      {
        loginError && <p>Incorrect username or password.</p>
      }
    </>
  );
}
 
export default LoginForm;