import { createSlice } from "@reduxjs/toolkit";

export const reserveSlice = createSlice({
  name: "reserve",
  initialState: {
    value: [],
  },
  reducers: {
    addReserveSuccess: (state, action) => {
      state.value.push({ ...action.payload, amount: 1 });
    },
    removeReserve: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload);
      if (tripIndex >= 0) {
        state.value.splice(tripIndex, 1);
      }
    },
    decrementAmountReserve: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload);
      if (state.value[tripIndex].amount <= 0) {
        return state;
      }
      if (tripIndex >= 0) {
        state.value[tripIndex].amount = Number(state.value[tripIndex].amount - 1);
      }
    },
    incrementAmountReserve: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload);
      if (tripIndex >= 0) {
        state.value[tripIndex].amount = Number(state.value[tripIndex].amount + 1);
      }
    },
  },
});

export const { addReserveSuccess, removeReserve, decrementAmountReserve, incrementAmountReserve } =
  reserveSlice.actions;
export default reserveSlice.reducer;
