import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
import { getUserProfile } from '../../Redux/userAction';
  import { UseDispatch,UseSelector, useDispatch, useSelector } from 'react-redux';
const UserProfile = () => {
    const dispatch = useDispatch()
    const  token = localStorage.getItem("token")
    const userDetails = useSelector((state) => state.user.profile);
    
   

    useEffect(() => {
        dispatch(getUserProfile(token));
    }, [dispatch,token]);


 const navigate = useNavigate()   
 
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    }, [navigate]);
    
  return (
    <>
      <Navbar />

      <button className='d-flex justify-content-end'> EDit</button>
      <div className=' d-fles justify-content-center p-10'>
        <h2> userNAME:{userDetails?.data?.username}</h2>
        <h2> Email:{userDetails?.data?.email}</h2>
      </div>
    </>
  );
}




export default UserProfile


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;