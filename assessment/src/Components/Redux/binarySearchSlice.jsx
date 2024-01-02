
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputArray: '',
  target: '',
  resultIndex: null,
  searchTime: null,
  iterations: 0, 
};

export const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState,
  reducers: {
    setInputArray: (state, action) => {
      state.inputArray = action.payload;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    },
    setResultIndex: (state, action) => {
      state.resultIndex = action.payload;
    },
    setSearchTime: (state, action) => {
      state.searchTime = action.payload;
    },
    setIterations: (state, action) => {
      state.iterations = action.payload;
    },
  },
});

export const {
  setInputArray,
  setTarget,
  setResultIndex,
  setSearchTime,
  setIterations,
} = binarySearchSlice.actions;

export const selectBinarySearch = (state) => state.binarySearch;

export default binarySearchSlice.reducer;
