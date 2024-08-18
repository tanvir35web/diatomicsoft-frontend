"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for making API calls
export const fetchData = createAsyncThunk(
  'projects/fetchData',
  async () => {
    const response = await axios.get('https://diatomicsoft-backend-api.vercel.app/api/clientReviews');
    return response.data;
  }
);

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
