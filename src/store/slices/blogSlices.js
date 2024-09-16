"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Utility function to get token from cookies
const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};



// export const fetchBlogs = createAsyncThunk(
//     'blogs/fetchBlogs',
//     async ({ rejectWithValue }) => {
//         try {
//             const response = await axios.get(
//                 `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`,
//             );
//             return response.data;
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 return rejectWithValue(error.response.data);
//             }
//             return rejectWithValue(error.message);
//         }
//     }
// );


// Define an async thunk for making API calls
export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`);
      return response.data;
    }
  );

// Define the slice
const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        data: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export const blogsReducer = blogsSlice.reducer;
