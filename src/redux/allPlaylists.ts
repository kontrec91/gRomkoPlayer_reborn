import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants/defaultValues";

const setAllPlaylists = createSlice({
 name: "allPlaylists",
 initialState,
 reducers: {
  getAllPlaylists: (state, action) => (action.payload ? action.payload : state),
 },
});

export const { getAllPlaylists } = setAllPlaylists.actions; // using for update state, when data has received fom api request
export default setAllPlaylists.reducer;
