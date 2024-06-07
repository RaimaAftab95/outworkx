import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentUser: undefined,
  isLoading: false
};

const HOST = 'https://www.api.outworkx.com';

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      // const response  = await axios.post("https://api.realworld.io/api/users", {
      //  user: userData,
      const response = await axios.post(`${HOST}/v1/auth/register`, {
        user: userData
      });
      // const response  = await axios.post("https://www.api.outworkx.com/v1/auth/login", {
      //     user: userData,
      // });
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      });
  }
});

export default authSlice.reducer;

//trial
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     currentUser: undefined,
//     isLoading: false,
//     error: null
// };

// const HOST = "https://www.api.outworkx.com";

// export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
//     try {
//         const response = await axios.post(`${HOST}/v1/auth/register`, {
//             firstName: userData.firstName,
//             lastName: userData.lastName,
//             email: userData.email,
//             phoneNumber: userData.phoneNumber,
//             password: userData.password,
//             dateOfBirth: userData.dateOfBirth,
//             gender: userData.gender
//         });
//         console.log('Register fulfilled:', response.data.user); // Debug log
//         return response.data.user;
//     } catch (err) {
//         console.error('Register rejected:', err.response.data.errors); // Debug log
//         return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
// });

// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//     try {
//         const response = await axios.post(`${HOST}/v1/auth/login`, {
//             email: credentials.email,
//             password: credentials.password
//         });
//         console.log('Register fulfilled:', response.data.user);
//         return response.data.user;
//     } catch (err) {
//         console.error('Register rejected:', err.response.data.errors);
//         return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
// });

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     extraReducers: builder => {
//         builder
//             .addCase(register.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(register.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.currentUser = action.payload;
//                 state.error = null;
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             .addCase(login.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.currentUser = action.payload;
//                 state.error = null;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default authSlice.reducer;

// https://web.postman.co/workspace/My-Workspace~a0672f7f-01bb-49e8-8437-afe9aa89e41a/request/36017585-4cd13679-40cb-4b28-b62b-b1d38ace650a
