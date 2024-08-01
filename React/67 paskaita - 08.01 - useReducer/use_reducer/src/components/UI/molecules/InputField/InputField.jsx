import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const InputField = ({ text, type, name, id, placeholderText, value, onChangeF }) => {
  return (
    <div>
      <Label
        text={text}
        idFor={id}
      />
      <Input
        type={type}
        name={name}
        id={id}
        placeholderText={placeholderText}
        value={value}
        onChangeF={onChangeF}
      />
    </div>
  );
}
 
export default InputField;