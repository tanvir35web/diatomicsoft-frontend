"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { deleteProjectReducer, projectFormReducer } from './slices/projectSlices';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectsReducer,
    projectDelete: deleteProjectReducer,
    projectForm: projectFormReducer,
  },
});

export default store;
