'use strict';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} Space
 * @property {string} name Space name
 * @property {string} description Space description
 * @property {string} address Space address
 * @property {string} addressHint Address hint
 * @property {string} city City
 * @property {string} state State
 * @property {string} country Country
 * @property {number} postalCode Postal code
 * @property {Array<{type: string, url: string}>} gallery Gallery
 * @property {number} numberOfDesks Number of desks
 * @property {number} pricePerDesk Price per desk
 * @property {number} maximumNumberOfNomads Maximum number of nomads
 * @property {Array<string>} amenities Amenities
 * @property {Array<string>} rules Rules
 * @property {Array<{day: number, start: number, end: number}>} timings Timings
 */

/**
 * @typedef {Object} SpaceState
 * @property {boolean} isLoading Is loading
 * @property {?Space} createdSpace Created space
 */

/**
 * @type {SpaceState}
 */
const initialState = {
  isLoading: false,
  createdSpace: null
};

export const createSpace = createAsyncThunk(
  'space/create',
  /**
   * Create a new space
   * @param {Space} payload Space object
   */
  async function (payload) {
    const response = await fetch(
      'https://www.api.outworkx.com/v1/space/create',
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

const createSpaceSlice = createSlice({
  name: 'createSpace',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createSpace.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createSpace.fulfilled, (state, action) => {
      state.createdSpace = action.payload;
      state.isLoading = false;
    });

    builder.addCase(createSpace.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const createSpaceReducer = createSpaceSlice.reducer;
export default createSpaceSlice;
