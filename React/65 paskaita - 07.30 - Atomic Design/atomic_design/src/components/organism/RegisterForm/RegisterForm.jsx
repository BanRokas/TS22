import { useState } from "react";

import InputField from "../../molecules/InputField/InputField";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const RegisterForm = () => {

  const [formError, setFormError] = useState('');
  const [formInputs, setFormInputs] = useState({
    username: '',
    email: '',
    gender: '',
    password: '',
    passwordRepeat: ''
  });
  const onChangeF = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
    });
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formInputs).some(el => formInputs[el] === '')){ // ar bent viena šio objekto reikšmė yra tuščia
      setFormError('All fields must be filled');
    } else if(formInputs.password !== formInputs.passwordRepeat){ // ar vienodi password ir passwordRepeat
      setFormError('Password and Password Repeat must match');
    } else {
      console.log('yay');

      fetch(`https://localhost:8080/users`, {
        method: "POST",
        headers:{
          "Content-Type":"appliccation/json"
        },
        body: JSON.stringify({
          username: formInputs.username,
          email: formInputs.email,
          gender: formInputs.gender,
          password: formInputs.password
        })
      })
    }
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <InputField
          name="username" id="username"
          type="text"
          text="User name:"
          placeholderText="Mr. Poopy Pants"
          value={formInputs.username}
          onChangeF={onChangeF}
        />
        <InputField 
          name="email" id="email"
          type="email"
          text="Email:"
          placeholderText="something@gmail.com"
          value={formInputs.email}
          onChangeF={onChangeF}
        />
        <div>
          <Label
            text="Choose Gender"
          />
          <InputField
            name="gender" id="male"
            type="radio"
            text="Male"
            value="male"
            onChangeF={onChangeF}
          />
          <InputField
            name="gender" id="female"
            type="radio"
            text="Female"
            value="female"
            onChangeF={onChangeF}
          />
        </div>
        <InputField
          name="password" id="password"
          type="password"
          text="Password:"
          placeholderText="Create the password..."
          value={formInputs.password}
          onChangeF={onChangeF}
        />
        <InputField
          name="passwordRepeat" id="passwordRepeat"
          type="password"
          text="Repeat password:"
          placeholderText="Repeat the password..."
          value={formInputs.passwordRepeat}
          onChangeF={onChangeF}
        />
        <Input
          type="submit"
          value="Register"
        />
      </form>
      {
        formError && <p>{formError}</p>
      }
    </>
  );
}
 
export default RegisterForm;