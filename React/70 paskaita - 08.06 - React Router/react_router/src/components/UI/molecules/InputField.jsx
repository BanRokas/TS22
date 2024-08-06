import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputField = ({ labelText, type, name, id, placeholderText, value, onChangeF }) => {
  return (
    <div>
      <Label
        text={labelText}
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