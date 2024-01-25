import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const baseURLURl ='https://socialmediaapi.ibrcloud.com'

export const getUserProfile = createAsyncThunk('user/getprofile', async (token, { dispatch }) => {
    try {
        const response = await axios.get(`${baseURLURl}/user/getProfile`, {
          headers: {
            Token: `${token}`,
            },
            
        });

               return response.data;
     
 
    } catch (err) {
    // error message
    }
})

