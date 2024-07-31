import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: red;
  text-decoration: underline;
  text-decoration: dotted;
`;

const Heading = ({ text, size }) => {
  const tag = `h${size}`;
  return (
    <StyledHeading
      as={tag}
    >{text}</StyledHeading>
  );
}
 
export default Heading;