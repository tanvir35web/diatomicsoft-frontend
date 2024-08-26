"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { projectFormReducer } from './slices/projectSlices';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectsReducer,
    projectForm: projectFormReducer,
  },
});

export default store;
