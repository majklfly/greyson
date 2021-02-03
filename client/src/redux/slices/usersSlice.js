import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers(state, action) {
      const { data } = action.payload;
      data.forEach((user) => {
        if (!state[user.id]) {
          state[user.id] = user;
        }
      });
    },
    addUser(state, action) {
      const res = action.payload;
      if (!state[res.id]) {
        state[res.id] = {
          id: res.id,
          name: res.name,
          surname: res.surname,
        };
      }
    },
    removeUser(state, action) {
      const res = action.payload.data;
      const id = res.id;
      delete state[id];
    },
    updateUser(state, action) {
      const res = action.payload;
      console.log(res);
      state[res.id] = {
        id: res.id,
        name: res.name,
        surname: res.surname,
      };
    },
  },
});

export const { addUsers, addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
