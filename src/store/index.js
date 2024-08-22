"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { projectFormReducer } from './slices/projectSlices';

const store = configureStore({
  reducer: {
    project: projectsReducer,
    projectForm: projectFormReducer,
  },
});

export default store;
