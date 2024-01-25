import React, { useState } from 'react';
import '../Signup/signup.css';
import { UseDispatch, UseSelector, useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../../Redux/authSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = async (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userData);
    debugger;
    dispatch(login(userData))
        .then((response) => {
           const {success,data,message} = response.payload 
            // console.log('response', response);
            //   debugger
            if (success) toast.success('Login successfully');
            localStorage.setItem('token', data.token)
            localStorage.setItem('userId', data.userId);
            navigate('/userprofile');
      })
      .catch((err) => {
        toast.error('something went wrong');
      });
  };

  return (
    <div className='center-wrapper'>
      <div className='center-content'>
        <h2> Login page</h2>
        <div className=' '>
          <form onSubmit={handleLogin}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
            email
              </label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={userData.email}
                onChange={handleChange}
                required
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
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

          <Link to='/signup' className='mt-1'> dont have Account  SignUP...</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
