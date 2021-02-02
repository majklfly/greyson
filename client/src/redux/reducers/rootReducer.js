import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import currentUserReducer from "../slices/currentUserSlice";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  currentUserReducer: currentUserReducer,
});

export default rootReducer;
