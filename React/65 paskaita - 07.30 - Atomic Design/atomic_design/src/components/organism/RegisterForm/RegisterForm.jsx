import { useState } from "react";

import InputField from "../../molecules/InputField/InputField";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const RegisterForm = () => {

  const [formInputs, setFormInputs] = useState({
    username: '',
    email: '',
    gender: ''
  });
  const onChangeF = () => {

  }

  return (
    <form>
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

    </form>
  );
}
 
export default RegisterForm;