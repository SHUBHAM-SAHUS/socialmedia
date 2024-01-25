import React, { useState } from 'react';
import './signup.css';
import { UseDispatch, UseSelector, useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/authSlice';
import { toast } from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';


const SignUP = () => {
  const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
      const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = async (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

    const handleSignup = (e) => {
          e.preventDefault();
        console.log(userData);
    //     dispatch(signup(userData)).then(() => {
    //      toast.success('signup successfully')
    //     }).catch((err) => {
    //     toast.error('something went wrong')
        // })
        
    dispatch(signup(userData))
      .then((response) => {
        const { success, data, message } = response.payload;
        // console.log('response', response);
        if (success) toast.success('SignUP successfully');
        
  
        navigate('/');
      })
      .catch((err) => {
        toast.error('something went wrong');
      });


  };

  return (
    <div className='center-wrapper'>
      <div className='center-content'>
        <h2> SIgn UP</h2>
        <div className=' '>
          <form onSubmit={handleSignup}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                User Name
              </label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={userData.username}
                onChange={handleChange}
                required
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>

          <Link to='/' className='mt-1'>
            {' '}
            dont have Account SignUP...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
