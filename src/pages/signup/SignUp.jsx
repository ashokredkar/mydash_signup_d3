import React, { useState, useEffect } from 'react';
import './SignUp.scss';
import bg from '../../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navToHome = useNavigate();

  // const [formValues, setFormValues] = useState({ email: '', password: '', pass2: '', name: '', number: '' });
  const [formValues, setFormValues] = useState({ email: undefined, password: undefined, pass2: undefined, name: undefined, number: undefined, checkbox: false });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid Email!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.pass2) {
      errors.pass2 = "This field is required";
    } else if (values.pass2 !== values.password) {
      errors.pass2 = "Password doesn't match";
    }

    if (!values.username) {
      errors.username = "Full Name Required!";
    } else if (values.username.length > 50) {
      errors.username = "Name cannot exceed more than 50 characters";
    }

    if (!values.number) {
      errors.number = "Phone Number is required!";
    } else if (values.number.length !== 10) {
      errors.number = "A number can only be of 10 digits";
    }

    if (!values.checkbox) {
      errors.checkbox = "Please check the terms and conditions!";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };



  

  return (
    <div className="signup">
      <div className="signup__left">
        <img className='signup__img' src={bg} alt="Signup__bg" />
        <div className="signup__left_info">
          <h2>Choose a date range</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quidem accusamus nobis odit eveniet amet.</p>
        </div>
      </div>
      <div className="signup__right">
        <form onSubmit={handleSubmit} className="signup__card">
          <h2>Create an account</h2>

          <label htmlFor="mail">Your email address</label>
          <input id="mail" type="email" name='mail' value={formValues.email} onChange={handleChange} />
          {formErrors.email && <p className='errorMsg'>{formErrors.email}</p>}

          <label htmlFor="pass">Your password</label>
          <input id="pass" type="password" name='password' value={formValues.password} onChange={handleChange} />
          {formErrors.password && <p className='errorMsg'>{formErrors.password}</p>}

          <label htmlFor="pass2">Confirm your password</label>
          <input id="pass2" type="password" name='pass2' value={formValues.pass2} onChange={handleChange} />
          {formErrors.pass2 && <p className='errorMsg'>{formErrors.pass2}</p>}

          <label htmlFor="username">Your full name</label>
          <input id="username" type="username" name='username' value={formValues.username} onChange={handleChange} />
          {formErrors.username && <p className='errorMsg'>{formErrors.username}</p>}

          <label htmlFor="number">Your phone number</label>
          <input type="number" name='number' value={formValues.number} onChange={handleChange} />
          {formErrors.number && <p className='errorMsg'>{formErrors.number}</p>}

          <div className="card__terms">
            <input type="checkbox" name='checkbox' onClick={() => setFormValues(true)} />
            <p>I read and agree to the Terms and Conditions</p>
          </div>
          {formErrors.checkbox && <p className='errorMsg'>{formErrors.checkbox}</p>}

          <button className="card__btn" onClick={() => {isSubmit && navToHome('/home')}}>Create Account</button>
          {/* <button className="card__btn">Create Account</button> */}
        </form>
      </div>
    </div>
  )
}

export default SignUp