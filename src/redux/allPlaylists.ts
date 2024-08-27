import { createSlice } from "@reduxjs/toolkit";
import { AllPlaylistsDataType } from "./types";

const initialState: AllPlaylistsDataType[] = [];

const allPlaylists = createSlice({
 name: "allPlaylists",
 initialState,
 reducers: {
  setAllPlaylists: (state, action) => action.payload,
 },
});

export const { setAllPlaylists } = allPlaylists.actions;
export default allPlaylists.reducer;
