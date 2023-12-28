
import { createSlice } from '@reduxjs/toolkit';

export const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState: {
    inputArray: '',
    target: '',
    resultIndex: null,
    searchTime: null,
  },
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
  },
});

export const {
  setInputArray,
  setTarget,
  setResultIndex,
  setSearchTime,
} = binarySearchSlice.actions;

export const selectBinarySearch = (state) => state.binarySearch;

export default binarySearchSlice.reducer;

