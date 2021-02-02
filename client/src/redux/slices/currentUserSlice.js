import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    addCurrentUser(state, action) {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { addCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
