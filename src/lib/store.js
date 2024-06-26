'use strict';

import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../features/auth-slice';
import { spacesReducer } from '../features/space-slice';

/**
 * @typedef {ReturnType<typeof store.getState>} ApplicationState
 */

/**
 * @typedef {typeof store.dispatch} ApplicationDispatch
 */

const store = configureStore({
  reducer: {
    auth: authReducer,
    spaces: spacesReducer
  }
});

export default store;
