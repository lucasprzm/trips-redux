import { createSlice } from "@reduxjs/toolkit";

export const reserveSlice = createSlice({
  name: "reserve",
  initialState: {
    value: [],
  },
  reducers: {
    pushArray: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload.id);
      console.log(tripIndex);
      if (tripIndex >= 0) {
        state.value[tripIndex].amount += 1;
      } else {
        state.value.push({ ...action.payload, amount: 1 });
      }
    },
  },
});

export const { pushArray } = reserveSlice.actions;
export default reserveSlice.reducer;

// export default function reserve(state = [], action) {
//   //console.log(state);
//   switch (action.type) {
//     case "ADD_RESERVE":
//       return [...state, action.trip];
//     default:
//       return state;
//   }
// }
