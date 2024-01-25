import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURLURl = 'https://socialmediaapi.ibrcloud.com';

export const getUserProfile = createAsyncThunk('user/getprofile', async (token, { dispatch }) => {
  try {
    const response = await axios.get(`${baseURLURl}/user/getProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Assuming the API response has a 'data' property containing the user profile
    return response.data.data; // Adjust this based on your API response structure
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    throw error;
  }
});


export const gUserProfile = createAsyncThunk('user/getprofile', async (token, { dispatch }) => {
  try {
    const response = await axios.get(`${baseURLURl}/user/getProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Assuming the API response has a 'data' property containing the user profile
    return response.data.data; // Adjust this based on your API response structure
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    throw error;
  }
});


const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Your existing reducer functions
    getUserProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    getUserProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
     
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { getUserProfileStart, getUserProfileSuccess, getUserProfileFailure } = userSlice.actions;

export default userSlice.reducer;
