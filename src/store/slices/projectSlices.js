"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utility function to get token from cookies
const getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

// Define an async thunk for making API calls
export const fetchData = createAsyncThunk(
  'projects/fetchData',
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`);
    return response.data;
  }
);


// Thunk to delete a project
export const deleteProject = createAsyncThunk(
  'deleteProject/deleteProject',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      // Retrieve the token from cookies
      const token = getCookieValue('uidToken');

      if (!token) {
        return rejectWithValue('Authentication token is missing.');
      }

      // Make the delete request with authorization headers
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set the token in the Authorization header
        },
      });
      dispatch(fetchData());
      return id; // Return the id of the deleted project
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const submitProjectForm = createAsyncThunk( 
  'projectForm/submitProjectForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`,
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

// Slice to manage deletion state
const deleteProjectSlice = createSlice({
  name: 'deleteProject',
  initialState: {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    lastDeletedId: null, // Keep track of last deleted project ID
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProject.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lastDeletedId = action.payload;
      })
      .addCase(deleteProject.rejected, (state, action) => {
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
export const deleteProjectReducer = deleteProjectSlice.reducer;

export default projectSlice.reducer;
