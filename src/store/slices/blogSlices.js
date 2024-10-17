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

// Delete a blog
export const deleteBlog = createAsyncThunk(
    'deleteBlog/deleteBlog',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            // Retrieve the token from cookies
            const token = getCookieValue('uidToken');

            if (!token) {
                return rejectWithValue('Authentication token is missing.');
            }

            // Make the delete request with authorization headers
            await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Set the token in the Authorization header
                },
            });
            dispatch(fetchBlogs());
            return id;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
);

const deleteBlogSlice = createSlice({
    name: 'deleteBlog',
    initialState: {
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBlog.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

// create a blog
export const createBlog = createAsyncThunk(
    'createBlog/createBlog',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            // Retrieve the token from cookies
            const token = getCookieValue('uidToken');

            if (!token) {
                return rejectWithValue('Authentication token is missing.');
            }
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data', // Important for file upload
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
);

const createBlogSlice = createSlice({
    name: 'createBlog',
    initialState: {
        isLoading: false,
        successMessage: null,
        errorMessage: null,
    },
    reducers: {
        // Additional reducers if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
                state.successMessage = null;
                state.errorMessage = null;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = 'Blog created successfully!';
                state.errorMessage = null;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.successMessage = null;
                state.errorMessage = action.payload || 'Failed to create blog';
            });
    },
});



export const blogsReducer = blogsSlice.reducer;
export const deleteBlogReducer = deleteBlogSlice.reducer;
export const createBlogReducer = createBlogSlice.reducer;
