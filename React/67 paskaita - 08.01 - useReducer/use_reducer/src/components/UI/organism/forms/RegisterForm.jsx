import { useContext, useState } from "react";
import UsersContext from "../../../../contexts/UsersContext";

import InputField from "../../molecules/InputField/InputField";
import Input from "../../atoms/Input/Input";

const RegisterForm = () => {

  const { setUsers } = useContext(UsersContext);

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
      setUsers({
        type: 'prideti',
        newUser:{
          id: Date.now().toString(),
          name: formInputs.name,
          password: formInputs.password
        }
      });
      console.log('sėkmingai registravosi');
      // prijungti vartotoja
      // nunaviguoti
    } else {
      console.log('failed to enter same password twice');
      // atvaizduoti error
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
  );
}
 
export default RegisterForm;