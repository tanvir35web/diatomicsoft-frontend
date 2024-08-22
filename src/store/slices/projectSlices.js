"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for making API calls
export const fetchData = createAsyncThunk(
  'projects/fetchData',
  async () => {
    const response = await axios.get('https://diatomicsoft-backend-api.vercel.app/api/projects');
    return response.data;
  }
);

export const submitProjectForm = createAsyncThunk(
  'projectForm/submitProjectForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://diatomicsoft-backend-api.vercel.app/api/projects',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        // Return custom error message from API response
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const projectFormSlice = createSlice({
  name: 'projectForm',
  initialState: {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitProjectForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitProjectForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(submitProjectForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});


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

export const projectFormReducer = projectFormSlice.reducer;
export default projectSlice.reducer;
