import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers(state, action) {
      const { data } = action.payload;
      data.forEach((user) => {
        state[user.id] = user;
      });
    },
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
