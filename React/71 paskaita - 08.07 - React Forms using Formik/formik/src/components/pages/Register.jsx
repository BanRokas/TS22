import { useFormik } from 'formik';
import bcrypt from 'bcryptjs';
import { v4 as generateID } from 'uuid';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      {
        registerError && <p>Error: {registerError}</p>
      }
    </section>
  );
}
 
export default Register;