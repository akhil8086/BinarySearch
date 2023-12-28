
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
    resetSearch: (state) => {
      state.inputArray = '';
      state.target = '';
      state.resultIndex = null;
      state.searchTime = null;
    },
  },
});

export const {
  setInputArray,
  setTarget,
  setResultIndex,
  setSearchTime,
  resetSearch,
} = binarySearchSlice.actions;

export const selectBinarySearch = (state) => state.binarySearch;

export default binarySearchSlice.reducer;

