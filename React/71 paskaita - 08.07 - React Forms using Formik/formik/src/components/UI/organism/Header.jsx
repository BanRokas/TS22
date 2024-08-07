import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0 30px;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav{

    > ul{
      margin: 0;
      padding: 0;
      display: flex;
      gap: 10px;

      > li{
        list-style-type: none;

        > a{
          text-decoration: none;
          font-size: 1.3rem;
        }
        > a:hover{
          color: green;
        }
        > a.active{
          color: red;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      {/* icon */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </ul>
      </nav>
      {/* user part */}
    </StyledHeader>
  );
}
 
export default Header;