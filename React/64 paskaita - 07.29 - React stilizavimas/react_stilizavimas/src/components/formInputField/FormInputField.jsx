const FormInputField = ({ labelText, type, id, inputValues, setInputValues }) => {
  return (
    <div>
      <label
        htmlFor={id}
      >{labelText}:</label>
      <input
        type={type}
        id={id}
        value={inputValues[id]}
        onChange={(e) => {
          setInputValues({
            ...inputValues,
            [id]: type === 'number' ? e.target.valueAsNumber : e.target.value
          })
        }}
      />
    </div>
  );
}
 
export default FormInputField;