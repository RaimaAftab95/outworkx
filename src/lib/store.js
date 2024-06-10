'use strict';

import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../features/auth-slice';

/**
 * @typedef {ReturnType<typeof store.getState>} ApplicationState
 */

/**
 * @typedef {typeof store.dispatch} ApplicationDispatch
 */

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
