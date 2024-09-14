"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { deleteProjectReducer, projectFormReducer, updateProjectReducer } from './slices/projectSlices';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectsReducer,
    projectDelete: deleteProjectReducer,
    projectForm: projectFormReducer,
    projectEdit: updateProjectReducer,
  },
});

export default store;
