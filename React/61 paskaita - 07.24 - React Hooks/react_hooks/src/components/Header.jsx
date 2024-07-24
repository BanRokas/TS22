const Header = ({ data, prijungtiF, atjungtiF }) => {

  const userName = localStorage.getItem('vardas');

  return (
    <header>
      {
        data === true ?
        <>
          <span>{userName}</span>
          <button onClick={atjungtiF}>Log Out</button>
        </> :
        <>
          <button>Sign Up</button>
          <button onClick={prijungtiF}>Log In</button>
        </>
      }
    </header>
  );
}
 
export default Header;