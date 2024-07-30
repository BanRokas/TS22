const Label = ({ text, idFor }) => {
  return (
    <label
      htmlFor={idFor}
    >{text}</label>
  );
}
 
export default Label;