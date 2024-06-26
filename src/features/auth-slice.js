'use strict';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} User User
 * @property {string} firstName User first name
 * @property {string} lastName User last name
 * @property {string} email User email
 * @property {string} password User password
 * @property {string} dateOfBirth User date of birth
 * @property {string} phoneNumber User phone number
 * @property {('male'|'female')} gender User
 */

/**
 * @typedef {Object} UserState
 * @property {boolean} isUserLoggedIn Is user logged in
 * @property {?User} currentUser Current user
 * @property {boolean} isLoading Is loading
 */

/**
 * @type {UserState}
 */
const initialState = {
  isUserLoggedIn: false,
  currentUser: null,
  isLoading: false
};

export const register = createAsyncThunk(
  'auth/register',
  /**
   * Register a new user
   * @param {User} payload User object
   */
  async function (payload) {
    const response = await fetch(
      'https://www.api.outworkx.com/v1/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ).then((res) => res.json());

    if (!response.ok) {
      throw new Error(response.data.message);
    }

    return response;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  /**
   * Login a user
   * @param {Object} payload User credentials
   * @param {string} payload.email User email
   * @param {string} payload.password User password
   */
  async function (payload) {
    const response = await fetch('https://www.api.outworkx.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then((res) => res.json());

    if (!response.ok) {
      throw new Error(response.data.message);
    }

    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Logout the user
     * @param {UserState} state
     */
    logout(state) {
      state.isUserLoggedIn = false;
      state.currentUser = null;
      console.log('User logged out');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isUserLoggedIn = true;
      state.isLoading = false;
    });

    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isUserLoggedIn = false;
    });
  }
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;

export default authSlice;
