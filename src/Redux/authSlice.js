import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiService from "../apiSevice"
import { act } from "react-dom/test-utils"

export const signup = createAsyncThunk('auth/Signup', async(userData) => {
    const reponse = await apiService.post('/user/signup', userData)
    return  reponse.data

})

export const login = createAsyncThunk('auth/login', async (userData) => {
  const reponse = await apiService.post('/user/login', userData);
  return reponse.data;
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuth: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.user = null;
        state.isAuth = false;
        state.error = action.error.message;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isAuth = false;
        state.error = action.error.message;
      }),
});

export default authSlice.reducer