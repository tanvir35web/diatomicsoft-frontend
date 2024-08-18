"use client"

import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectSlices';

const store = configureStore({
  reducer: {
    project: projectsReducer,
  },
});

export default store;
