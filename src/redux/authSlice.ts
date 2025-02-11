import { createSlice } from "@reduxjs/toolkit";
import { usersAuthState } from "./types";

const initialState: usersAuthState = {
 user: {}, // Currently logged in user
 error: null, // Any error that occurred during login
 status: "idle", // Status of the login process (idle, pending, complete, failed)
};

const authSlice = createSlice({
 name: "authUser",
 initialState,
 reducers: {
  signInUserRequest: (state, action) => {
   state.user = action.payload;
   state.error = null;
   state.status = "pending";
  },

  signInUserSuccess: (state, action) => {
   const { name, id, email } = action.payload;
   state.user = {
    userId: id,
    userName: name,
    userEmail: email,
   };
   state.error = null;
   state.status = "complete";
  },

  signInUserFailure: (state, action) => {
   state.user = initialState.user;
   state.error = action.payload;
   state.status = "failed";
  },

  addNewUserRequest: (state, action) => {
   state.user = action.payload;
   state.error = null;
   state.status = "pending";
  },

  addNewUserSuccess: (state, action) => {
   const { id, email, name } = action.payload;
   state.user = {
    userId: id,
    userName: name,
    userEmail: email,
   };
   state.error = null;
   state.status = "complete";
  },

  addNewUserFailure: (state, action) => {
   state.user = initialState.user;
   state.error = action.payload;
   state.status = "failed";
  },

  Logout: (state) => {
   return initialState;
  },
 },
});

export const {
 signInUserRequest,
 signInUserSuccess,
 signInUserFailure,
 addNewUserRequest,
 addNewUserSuccess,
 addNewUserFailure,
 Logout,
} = authSlice.actions;

export default authSlice.reducer;
