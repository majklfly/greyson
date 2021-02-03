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
    addUser(state, action) {
      const res = action.payload;
      state[res.id] = {
        id: res.id,
        name: res.name,
        surname: res.surname,
        job: res.job,
      };
    },
    removeUser(state, action) {
      const res = action.payload.data;
      const id = res.id;
      delete state[id];
    },
  },
});

export const { addUsers, addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
