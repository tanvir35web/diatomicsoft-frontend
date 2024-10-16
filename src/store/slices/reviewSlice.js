"use client"

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Define an async thunk for making API calls
export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/clientReviews`);
        return response.data;
    }
);

// Define the slice
const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        data: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export const reviewsReducer = reviewSlice.reducer;
