import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  inititalState,

  reducers: {
    increment: inititalState => {
      inititalState.value += 1;
    },
  },

  decrement: inititalState => {
    inititalState.value -= 1;
  },

  incrementByAmount(inititalState) {
    return { inititalState };
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
