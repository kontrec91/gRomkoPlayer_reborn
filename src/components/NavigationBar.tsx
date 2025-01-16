import React, { useState, SyntheticEvent } from "react";
import {
 AppBar,
 Box,
 ClickAwayListener,
 SxProps,
 Tab,
 Tabs,
} from "@mui/material";
import { ROUTES } from "../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/currentTab";
import { RootState } from "../redux/store";
import { defaultTabValue } from "../constants/defaultValues";
import { signInUserRequest } from "../redux/setLoginUser";
import { logoutUser } from "../constants/actions/actions";
import { UserMenu } from "./UserMenu";

const styles: SxProps = {
 position: "absolute",
 top: 10,
 right: 0,
 left: 55,
 zIndex: 1,
 border: "1px solid",
 //  p: 1,
 bgcolor: "background.paper",
 width: "70px",
 color: "black",
};

export const NavigationBar = () => {
 const dispatch = useDispatch();
 //  const value = useSelector((state: RootState) => state.rootReducer.tab);
 const value = useSelector((state: RootState) => state.tab);

 const [open, setOpen] = useState(false);

 const handleClick = () => {
  setOpen((prev) => !prev);
 };

 const handleClickAway = () => {
  setOpen(false);
 };

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
    {/* <Tab label="gRomkoPlayer" /> */}
    <Tab component={Link} label="my playlists" to={ROUTES.MY_PLAYLISTS} />
    <Tab component={Link} label="all playlists" to={ROUTES.ALL_PLAYLISTS} />
    <Tab component={Link} label="search" to={ROUTES.SEARCH} />

    {/* <ClickAwayListener
     mouseEvent="onMouseDown"
     touchEvent="onTouchStart"
     onClickAway={handleClickAway}>
     <Box sx={{ position: "relative" }}>
      <Tab component={Link} label="user" to={""} />
      {open ? <Box sx={styles}>Sign out</Box> : null}
     </Box>
    </ClickAwayListener> */}

    {/* {open ? <Box sx={styles}>Sign out</Box> : null} */}
    {/* </Tab> */}
    <Tab
     component={UserMenu}
     label="user"
    //  sx={{
    //   "&.hover": {
    //    color: "#1976d2",
    //   },
    //  }}
    />
    {/* <Tab component={Link} label="log out" to={ROUTES.DEFAULT}/> */}
   </Tabs>
  </AppBar>
 );
};
