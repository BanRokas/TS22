import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${props => props.$fonoSpalva || 'maroon'};
  color: ${props => props.$tekstoSpalva || 'aqua'};

  &:hover{
    color: yellow;
    transform: scale(1.5);
  }
`;

const Button = ({ text, bgColor, textColor }) => {
  return (
    // <button>{text}</button>
    <StyledButton
      $fonoSpalva={bgColor}
      $tekstoSpalva={textColor}
    >{text}</StyledButton>
  );
}
 
export default Button;