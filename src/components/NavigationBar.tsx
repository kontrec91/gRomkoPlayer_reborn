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

 const UserMenu = () => {
  //replace to file
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
   setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
   setOpen(false);
  };

  const handleSignOutClick = (
   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
   event.preventDefault();
   dispatch(setTab(defaultTabValue));
   navigate(ROUTES.LOGIN);
  };

  return (
   <ClickAwayListener
    // sx={{ position: "relative" }}
    mouseEvent="onMouseDown"
    touchEvent="onTouchStart"
    onClickAway={handleClickAway}>
    <Box
     sx={{
      position: "relative",
      // mt:'10px'
      padding: "12px 16px",
     }}>
     {/* <button type="button" onClick={handleClick}>
      User
     </button> */}
     {/* <Link onClick={handleClick} to={""}>
      User
     </Link>
     {!open ? <Box sx={styles}>Sign out</Box> : null} */}
     <Box sx={{ color: "grey" }} onClick={handleClick}>
      USER
     </Box>
     {open ? (
      <Link
       onClick={handleSignOutClick}
       style={{
        position: "absolute",
        top: 10,
        right: 0,
        left: 60,
        zIndex: 1,
        border: "1px solid",
        backgroundColor: "background.paper",
        width: "70px",
        // color: "black",
       }}
       to={ROUTES.LOGIN}>
       Sign out
      </Link>
     ) : null}
    </Box>
   </ClickAwayListener>
  );
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
   <Tabs
    value={value}
    onChange={handleChange}
    aria-label="nav tabs example"
    sx={{
     "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
     },
    }}>
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
    <Tab component={UserMenu} label="user" />
    {/* <Tab component={Link} label="log out" to={ROUTES.DEFAULT}/> */}
   </Tabs>
  </AppBar>
 );
};
