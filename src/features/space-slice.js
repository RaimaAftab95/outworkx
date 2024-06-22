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
 * @property {ApiStatus} status Current status of the space fetching process
 * @property {?string} error Error message, if any
 * @property {number} pageNumber Current page number
 * @property {number} pageSize Size of each page (number of items)
 */

/**
 * @typedef {('idle'|'loading'|'succeeded'|'failed')} ApiStatus
 * @readonly
 * @enum {ApiStatus}
 */
export const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Successful: 'successful',
  Failed: 'failed'
};

/**
 * @type {SpaceState}
 */
const initialState = {
  entities: [],
  status: Status.Idle,
  error: null,
  pageNumber: 1,
  pageSize: 10
};

export const list = createAsyncThunk('spaces/list', async (_, { getState }) => {
  const { pageNumber, pageSize } = getState().spaces;

  const response = await fetch('https://www.api.outworkx.com/v1/space/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ pageNumber, pageSize })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(response.data.message);
  }

  return data.data.spaces;
});

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    incrementPageNumber: (state) => {
      state.pageNumber += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(list.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(list.fulfilled, (state, action) => {
        state.status = Status.Successful;
        state.entities = [...state.entities, ...action.payload];
      })
      .addCase(list.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload;
      });
  }
});

export const { incrementPageNumber } = spaceSlice.actions;
export const spacesReducer = spaceSlice.reducer;

export default spaceSlice;
