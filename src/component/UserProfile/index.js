import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
 
const UserProfile = () => {
 const navigate = useNavigate()   
 
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    }, [navigate]);
    
  return (
       <>
    <Navbar/>
      </>
  )
}

export default UserProfile