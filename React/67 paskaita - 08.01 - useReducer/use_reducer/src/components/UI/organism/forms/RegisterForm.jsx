import { useContext, useState } from "react";
import { v4 as generateID } from 'uuid';
import bcrypt from 'bcryptjs';

import UsersContext from "../../../../contexts/UsersContext";
import PageLoaderContext from "../../../../contexts/PageLoader";

import InputField from "../../molecules/InputField/InputField";
import Input from "../../atoms/Input/Input";

const RegisterForm = () => {

  const { setUsers, setLoggedInUser } = useContext(UsersContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  const [registerError, setRegisterError] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: '',
    password: '',
    passwordRepeat: ''
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
    if(formInputs.password === formInputs.passwordRepeat){
      const newUser = {
        id: generateID(),
        name: formInputs.name,
        passwordVisual: formInputs.password, // nepalikti realioje versijoje
        password: bcrypt.hashSync(formInputs.password, 10)
      };
      setUsers({
        type: 'prideti',
        newUser: newUser
      });
      console.log('sėkmingai registravosi');
      setLoggedInUser(newUser);
      setPageLoader('home');
    } else {
      console.log('failed to enter same password twice');
      setRegisterError(true);
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
        <InputField
          text="Repeat password:"
          type="password"
          name="passwordRepeat" id="passwordRepeat"
          placeholderText="Repeat password..."
          value={formInputs.passwordRepeat}
          onChangeF={onFormInputChange}
        />
        <Input
          type="submit"
          value="Register"
        />
      </form>
      {
        registerError && <p>Failed to enter same password twice.</p>
      }
    </>
  );
}
 
export default RegisterForm;