import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../constants/actions/actions";
import { useDispatch } from "react-redux";
import { ROUTES } from "../constants/routes";
import { Box, ClickAwayListener } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const UserMenu = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const authUser = useSelector(
  (state: RootState) => state.authUser.user.userName
 );
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
  dispatch(logoutUser());
  // here need to use custom hook for this
  navigate(ROUTES.LOGIN);
 };

 return (
  <ClickAwayListener
   mouseEvent="onMouseDown"
   touchEvent="onTouchStart"
   onClickAway={handleClickAway}>
   <Box
    sx={{
     position: "relative",
     padding: "12px 16px",
     display: "flex",
     alignItems: "center",
    }}>
    <Box
     sx={{
      color: "grey",
      cursor: "pointer",
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: "500",
      fontSize: "0.875rem",
      lineHeight: "1.25",
      letterSpacing: "0.02857em",
      textTransform: "uppercase",

      "&:hover": {
       color: "#1976d2",
      },
     }}
     onClick={handleClick}>
     USER: {authUser}
    </Box>
    {open ? (
     <Link
      onClick={handleSignOutClick}
      style={{
       position: "absolute",
       top: 30,
       right: 0,
       left: 20,
       zIndex: 1,
       border: "1px solid",
       backgroundColor: "background.paper",
       width: "70px",
      }}
      to={ROUTES.LOGIN}>
      Sign out
     </Link>
    ) : null}
   </Box>
  </ClickAwayListener>
 );
};
