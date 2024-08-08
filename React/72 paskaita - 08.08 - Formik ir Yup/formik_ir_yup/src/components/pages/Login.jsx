import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import UsersContext from '../../contexts/Users';

const Login = () => {

  const navigate = useNavigate();
  const { users, setLoggedInUser } = useContext(UsersContext);
  const [loginError, setLoginError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      const isUser = users.find(user => user.username === values.username && bcrypt.compareSync(values.password, user.password));
      if(isUser){
        setLoggedInUser(isUser);
        navigate('/');
      } else {
        setLoginError('Username or password is incorrect.');
      }
    }
  });

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            name="username" id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      {
        loginError && <p>Error: {loginError}</p>
      }
    </section>
  );
}
 
export default Login;