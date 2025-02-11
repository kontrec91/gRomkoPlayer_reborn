import React, { useState, SyntheticEvent } from "react";
import { AppBar, Box, SxProps, Tab, Tabs } from "@mui/material";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/currentTab";
import { RootState } from "../redux/store";

import { UserMenu } from "./UserMenu";

export const NavigationBar = () => {
 const dispatch = useDispatch();
 const value = useSelector((state: RootState) => state.tab);

 const handleChange = (
  event: SyntheticEvent<Element, Event>,
  newValue: number
 ) => {
  dispatch(setTab(newValue));
 };

 return (
  <AppBar
   sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    top: "0",
    bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
   }}>
   <Box
    sx={{
     position: "absolute",
     padding: "12px 16px",
    }}>
    gRomkoPlayer
   </Box>
   <Tabs
    value={value}
    onChange={handleChange}
    aria-label="nav tabs example"
    sx={{
     position: "relative",
     "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
     },
    }}>
    <Tab component={Link} label="my playlists" to={ROUTES.MY_PLAYLISTS} />
    <Tab component={Link} label="all playlists" to={ROUTES.ALL_PLAYLISTS} />
    <Tab component={Link} label="search" to={ROUTES.SEARCH} />
    <Tab component={UserMenu} label="user" />
   </Tabs>
  </AppBar>
 );
};
