import { useFormik } from 'formik';

const Register = () => {

  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
      passwordRepeat: '',
      drivingLicenseCategories: [], // checkbox
      phone: '', // tel
      profilePicture: '', // url
      gender: '', // radio
      age: '', // number
      nationality: '', // select
      dob: '' // date of birth
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
        <fieldset>
          <legend>Driving Licenses</legend>
          <div>
            <label htmlFor="a">A</label>
            <input
              type="checkbox"
              name="drivingLicenseCategories" id="a"
              value='a'
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="b">B</label>
            <input
              type="checkbox"
              name="drivingLicenseCategories" id="b"
              value='b'
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="c">C</label>
            <input
              type="checkbox"
              name="drivingLicenseCategories" id="c"
              value='c'
              onChange={formik.handleChange}
            />
          </div>
        </fieldset>
        <div>
          <label htmlFor="phone">Telephone:</label>
          <input
            type="tel"
            name="phone" id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="url"
            name="profilePicture" id="profilePicture"
            value={formik.values.profilePicture}
            onChange={formik.handleChange}
          />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender" id="male"
              value='male'
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender" id="female"
              value='female'
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="secret">Prefer not to say</label>
            <input
              type="radio"
              name="gender" id="secret"
              value='secret'
              onChange={formik.handleChange}
            />
          </div>
        </fieldset>
        <div>
          <label htmlFor="age">Your age:</label>
          <input
            type="number"
            name="age" id="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="nationality">Select your nationality:</label>
          <select name="nationality" id="nationality"
            value={formik.values.nationality} onChange={formik.handleChange}
          >
            <option disabled value=""></option>
            <option value="lithuanian">Lithuanian</option>
            <option value="latvian">Latvian</option>
            <option value="estonian">Estonian</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="datetime-local"
            name="dob" id="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </section>
  );
}
 
export default Register;