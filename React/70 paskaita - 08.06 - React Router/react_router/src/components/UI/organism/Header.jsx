import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  height: 60px;
  border-bottom: 2px dashed black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav{

    > ul{
      padding: 0;
      margin: 0;

      display: flex;
      gap: 10px;

      > li{
        list-style-type: none;

        > a{
          text-decoration: none;
          font-size: 1.3rem;
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
      <h2>LOGO</h2>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
      </nav>
      <div>
        <h3>Login/Register</h3>
      </div>
    </StyledHeader>
  );
}
 
export default Header;