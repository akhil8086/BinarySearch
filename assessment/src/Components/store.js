
import { configureStore } from '@reduxjs/toolkit';
import binarySearchReducer from './Redux/binarySearchSlice.jsx';

export const store = configureStore({
  reducer: {
    binarySearch: binarySearchReducer,
  },
});