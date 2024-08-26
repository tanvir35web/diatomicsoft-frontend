// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://diatomicsoft-v1.vercel.app/api/login',
        { email, password },
        { withCredentials: true }
      );

      if (response.data.message === 'User logged in successfully') {
        document.cookie = "uidToken=" + response.data.data.token + "; path=/; Secure; SameSite=None";
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        // Check if there's a structured error message from the server
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue('No response from the server. Please try again later.');
      } else {
        return rejectWithValue('An error occurred during login. Please try again.');
      }
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      document.cookie = "uidToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=None";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data; // Assuming response.data contains user data
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
