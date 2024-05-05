import { createSlice } from '@reduxjs/toolkit';

import { fetchData, getCamper } from './operators';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      // fetch

      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    

      // find camper by ID

      .addCase(getCamper.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.campers.findIndex(
          camper =>camper.id === action.payload.id
        );
        state.campers.find(index);
      })
      .addCase(getCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
