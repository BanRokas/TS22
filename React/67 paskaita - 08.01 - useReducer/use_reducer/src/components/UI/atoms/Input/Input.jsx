const Input = ({ type, name, id, placeholderText, value, onChangeF }) => {
  return (
    <input 
      type={type}
      name={name} id={id}
      placeholder={placeholderText}
      value={value}
      onChange={onChangeF}
    />
  );
}
 
export default Input;