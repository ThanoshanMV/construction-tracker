import React, { Fragment, useState } from 'react';

/**
 * Since it's a form we need to have component state
 * because each input needs to have its own state and also
 * they need to have on change handler, so when we type in it updates
 * the state.
 *
 */

const Register = () => {
  /**
   * formData = state (an object with all field values)
   * setFormData = a function to update the state.
   */
  const [formData, setFormData] = useState({
    //Defining initial values to state
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Register User</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create User Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label className='lead' htmlFor='name'>
            Name:
          </label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label className='lead' htmlFor='email'>
            Email:
          </label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label className='lead' htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label className='lead' htmlFor='password2'>
            Confirm Password:
          </label>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

export default Register;
