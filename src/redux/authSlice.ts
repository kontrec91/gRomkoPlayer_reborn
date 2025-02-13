import { createSlice } from "@reduxjs/toolkit";
import { usersAuthState } from "./types";

const initialState: usersAuthState = {
 user: {}, // Currently logged in user
 error: null, // Any error that occurred during login
 status: "idle", // Status of the login process (idle, pending, complete, failed)
 accessToken: null,
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
   const { name, id, email, accessToken } = action.payload;
   state.user = {
    userId: id,
    userName: name,
    userEmail: email,
   };
   state.error = null;
   state.status = "complete";
   state.accessToken = accessToken;
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
   const { id, email, name, accessToken } = action.payload;
   state.user = {
    userId: id,
    userName: name,
    userEmail: email,
   };
   state.error = null;
   state.status = "complete";
   state.accessToken = accessToken;
  },

  addNewUserFailure: (state, action) => {
   state.user = initialState.user;
   state.error = action.payload;
   state.status = "failed";
  },

  logoutUserRequest: (state) => {
   return state;
  },

  logoutUserSuccess: () => {
   return initialState;
  },

  logoutUserFailure: (state, action) => {
   //    state.user = initialState.user;
   state.error = action.payload;
   state.status = "failed";
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
 logoutUserRequest,
 logoutUserSuccess,
 logoutUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
