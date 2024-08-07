import { useFormik } from 'formik';

const Register = () => {

  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
      passwordRepeat: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <section>
      <h2>Registration</h2>
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
        <div>
          <label htmlFor="passwordRepeat">Password Repeat:</label>
          <input
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </section>
  );
}
 
export default Register;