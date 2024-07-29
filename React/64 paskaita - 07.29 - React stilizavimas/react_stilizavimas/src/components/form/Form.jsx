import styled from "styled-components";
import { useState } from "react";

import FormInputField from "../formInputField/FormInputField";

const StyledForm = styled.form`
  margin: 50px auto 0;
  width: 60%;
  border: 3px solid black;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  > div{
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 5px;

    > label{
      justify-self: end;
    }
    > input{
      justify-self: start;
      width: 100%;
    }
  }
`;

const Form = () => {

  const [inputValues, setInputValues] = useState({
    vardas: '',
    pavarde: '',
    amzius: ''
  });

  return (
    <StyledForm>
      <FormInputField 
        labelText="Vardas"
        type="text"
        id="vardas"
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <FormInputField 
        labelText="Pavardė"
        type="text"
        id="pavarde"
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <FormInputField 
        labelText="Amžius"
        type="number"
        id="amzius"
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <input 
        type="submit"
        value="Pateikti formą"
      />
    </StyledForm>
  );
}
 
export default Form;