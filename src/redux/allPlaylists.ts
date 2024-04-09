import { createSlice } from "@reduxjs/toolkit";
import { AllUsersPlaylistsType } from "./types";

const initialState: AllUsersPlaylistsType[] = [];

const allPlaylists = createSlice({
 name: "allPlaylists",
 initialState,
 reducers: {
  setAllPlaylists: (state, action) => action.payload,
 },
});

export const { setAllPlaylists } = allPlaylists.actions;
export default allPlaylists.reducer;
