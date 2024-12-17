import { createSlice } from "@reduxjs/toolkit";
import { usersType } from "./types";

const initialState: usersType[] = [];

const setNewUser = createSlice({
 name: "newUser", // the name of slice
 initialState,
 reducers: {
  //reducers
  addNewUserRequest: (state, action) => action.payload, //action
  addNewUserSuccess: (state, action) => action.payload,
 },
}); // here we create object setNewUser, with an action "newUser/addNewUser" and reducer named addNewUser

export const { addNewUserRequest, addNewUserSuccess } = setNewUser.actions; // for dispatch action, and? we used it in saga for getting a payload
export default setNewUser.reducer; // for using as reducer in store
