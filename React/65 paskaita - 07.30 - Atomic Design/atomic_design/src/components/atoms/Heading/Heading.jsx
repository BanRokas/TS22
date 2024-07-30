const Heading = ({ text, size }) => {
  const Tag = `h${size}`;
  return (
    <Tag>{text}</Tag>
  );
}
 
export default Heading;