"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { deleteProjectReducer, projectFormReducer, updateProjectReducer } from './slices/projectSlices';
import authReducer from './slices/authSlice';
import {blogsReducer, createBlogReducer, deleteBlogReducer, updateBlogReducer} from './slices/blogSlices';
import { reviewsReducer } from "@/store/slices/reviewSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,

    project: projectsReducer,
    projectDelete: deleteProjectReducer,
    projectForm: projectFormReducer,
    projectEdit: updateProjectReducer,

    blogs: blogsReducer,
    // singleBlog: blogsReducer,
    blogCreate: createBlogReducer,
    blogUpdate: updateBlogReducer,
    blogDelete: deleteBlogReducer,

    reviews: reviewsReducer,
  },
});

export default store;
