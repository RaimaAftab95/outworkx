import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  spacesList: [],
  status: 'idle',
  error: null,
  pageNumber: 1
};

// Async thunk for fetching spaces data
export const fetchSpaces = createAsyncThunk(
  'spaces/fetchSpaces',
  async (payload, { getState, rejectWithValue }) => {
    const { pageNumber } = getState().spaces;
    try {
      const response = await fetch(
        'https://www.api.outworkx.com/v1/space/list',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pageNumber, pageSize: payload.pageSize })
        }
      );

      const data = await response.json();

      console.log('Data received from API:', data);
      console.log('Spaces payload', payload);
      console.log('response of fetchspaces', response);

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
      .addCase(fetchSpaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.spacesList = [...state.spacesList, ...action.payload];
      })
      .addCase(fetchSpaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { incrementPageNumber } = spaceSlice.actions;
export const spacesReducer = spaceSlice.reducer;
export default spaceSlice;
