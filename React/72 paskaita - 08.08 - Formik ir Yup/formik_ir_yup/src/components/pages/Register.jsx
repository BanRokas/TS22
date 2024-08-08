import { useFormik } from 'formik';
import bcrypt from 'bcryptjs';
import { v4 as generateID } from 'uuid';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import UsersContext from '../../contexts/Users';

const Register = () => {

  const { users, setUsers, setLoggedInUser } = useContext(UsersContext);
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      drivingLicenseCategories: [], // checkbox
      phone: '', // tel
      profilePicture: '', // url
      gender: '', // radio
      age: '', // number
      nationality: '', // select
      dob: '' // date of birth
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
        .trim(),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Field must be filled'),
      email: Yup.string()
        .email('Field must be a valid email')
        .required('Field must be filled'),
      drivingLicenseCategories: Yup.array()
        .min(1, 'At least one category must be chosen'), // nelogiška turėti tokią validaciją mūsų atveju
      phone: Yup.string()
        .matches(/^\+370 6\d{2} \d{5}$/, 'Phone number must match this pattern: +370 6xx xxxxx'),
      profilePicture: Yup.string()
        .url('Must be a valid url'),
      gender: Yup.string()
        .required('Field must be filled'),
      age: Yup.number()
        .moreThan(10, 'must be over age of 10')
        .lessThan(500, 'must still be alive')
        .required('Field must be filled'),
      nationality: Yup.string()
        .required('Field must be filled'),
      // dob: Yup.string()
      //   .datetime()
      // dob: Yup.date()
      //   .min()
      //   .max(new Date(), 'cannot later than now')

    }),
    onSubmit: (values) => {
      // console.log(values);

      if(users.find(user => user.username === values.username)){
        setRegisterError('User with such name already exists');
      } else if(users.find(user => user.email === values.email)){
        setRegisterError('User with such email already exists');
      } else {
        const { passwordRepeat, ...newUser } = values;
        newUser.passwordVisible = newUser.password; // realiame kode neturi būti. daromės kad turėtume galimybę pasižiūrėti password'ą kokį įvedinėti
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        newUser.id = generateID();
        // console.log(newUser);
        setUsers({ type: 'addNew', newUser: newUser });
        setLoggedInUser(newUser);
        navigate('/');
      }
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
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email" id="email"
            value={formik.values.email}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="b">B</label>
            <input
              type="checkbox"
              name="drivingLicenseCategories" id="b"
              value='b'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="c">C</label>
            <input
              type="checkbox"
              name="drivingLicenseCategories" id="c"
              value='c'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {
            formik.touched.drivingLicenseCategories && formik.errors.drivingLicenseCategories &&
            <p>{formik.errors.drivingLicenseCategories}</p>
          }
        </fieldset>
        <div>
          <label htmlFor="phone">Telephone:</label>
          <input
            type="tel"
            name="phone" id="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.phone && formik.errors.phone &&
            <p>{formik.errors.phone}</p>
          }
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
      {
        registerError && <p>Error: {registerError}</p>
      }
    </section>
  );
}
 
export default Register;