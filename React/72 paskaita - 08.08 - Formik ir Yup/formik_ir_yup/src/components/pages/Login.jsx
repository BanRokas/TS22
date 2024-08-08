import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

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
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Username must be at least 5 symbols length')
        .max(20, 'Username can be up to 20 symbols length')
        .required('Field must be filled')
        .trim(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Password must be at least: one lower case, one upper case, one number, one special symbol and length to be between 8 and 25'
        )
        .required('Field must be filled')
        .trim()
    }),
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.username && formik.errors.username &&
            <p>{formik.errors.username}</p>
          }
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.password && formik.errors.password &&
            <p>{formik.errors.password}</p>
          }
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