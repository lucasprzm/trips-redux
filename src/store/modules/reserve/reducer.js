import { createSlice } from "@reduxjs/toolkit";

export const reserveSlice = createSlice({
  name: "reserve",
  initialState: {
    value: [],
  },
  reducers: {
    addReserve: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload.id);
      console.log(tripIndex);
      if (tripIndex >= 0) {
        state.value[tripIndex].amount += 1;
      } else {
        state.value.push({ ...action.payload, amount: 1 });
      }
    },
    removeReserve: (state, action) => {
      const tripIndex = state.value.findIndex((trip) => trip.id === action.payload);
      if (tripIndex >= 0) {
        state.value.splice(tripIndex, 1);
      }
    },
  },
});

export const { addReserve, removeReserve } = reserveSlice.actions;
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
