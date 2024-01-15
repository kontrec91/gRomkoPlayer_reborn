import { createSlice } from "@reduxjs/toolkit";

const currentTab = createSlice({
 name: "tab",
 initialState: 0,
 reducers: {
  setTab: (state, action) => action.payload,
 },
});

export const { setTab } = currentTab.actions;
export default currentTab.reducer;
