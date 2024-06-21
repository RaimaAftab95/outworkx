'use strict';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} Space Space
 * @property {string} id Space ID
 * @property {string} name Space name
 * @property {string} location Space location
 * @property {string} description Space description
 * @property {string} imageUrl Space image URL
 */

/**
 * @typedef {Object} SpaceState
 * @property { Space[]} entities List of spaces
 * @property {string} status Current status of the space fetching process
 * @property {?string} error Error message, if any
 * @property {number} pageNumber Current page number
 * * @property {number} pageSize Size of each page (number of items)
 */

/**
 * @typedef {('idle'|'loading'|'succeeded'|'failed')} Status
 * @readonly
 * @enum {Status}
 */
// Define the Status enum
export const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
};

/**
 * @type {SpaceState}
 */
const initialState = {
  entities: [],
  status: Status.IDLE,
  error: null,
  pageNumber: 1,
  pageSize: 10
};

// Async thunk for fetching spaces data
export const list = createAsyncThunk(
  'spaces/list',
  async (_, { getState, rejectWithValue }) => {
    const { pageNumber, pageSize } = getState().spaces;
    try {
      const response = await fetch(
        'https://www.api.outworkx.com/v1/space/list',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pageNumber, pageSize })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch spaces');
      }

      return data.data.spaces;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create slice for spaces
const spaceSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {
    incrementPageNumber: (state) => {
      state.pageNumber += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(list.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(list.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.entities = [...state.entities, ...action.payload];
      })
      .addCase(list.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload;
      });
  }
});

export const { incrementPageNumber } = spaceSlice.actions;
export const spacesReducer = spaceSlice.reducer;
export default spaceSlice;
