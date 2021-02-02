import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const usersSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addUser(state, action) {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
