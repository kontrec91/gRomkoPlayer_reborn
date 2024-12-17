import React, { useState, MouseEvent, useEffect } from "react";
import { alpha } from "@mui/material/styles";
import background from "../images/headphones.jpg";
import {
 Box,
 Button,
 FormControl,
 IconButton,
 InputAdornment,
 InputLabel,
 OutlinedInput,
 Typography,
 FormHelperText,
 Link,
} from "@mui/material";

import {
 Unstable_Popup as BasePopup,
 PopupPlacement,
} from "@mui/base/Unstable_Popup";
import { styled, css, Theme } from "@mui/system";

import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ROUTES } from "../constants/routes";
import { Wrapper } from "../components/Wrapper";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { signInUser, signInUserRequest } from "../redux/setLoginUser";
import { signInUserRequest } from "../redux/setLoginUser";
import { RootState } from "../redux/store";
import { useLogin } from "../hooks/useLogin";
// import { loginUser } from "../redux/sagas/sagas";

const grey = {
 50: "#F3F6F9",
 100: "#E5EAF2",
 200: "#DAE2ED",
 300: "#C7D0DD",
 400: "#B0B8C4",
 500: "#9DA8B7",
 600: "#6B7A90",
 700: "#434D5B",
 800: "#303740",
 900: "#1C2025",
};

export const LoginPage = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const formik = useFormik({
  initialValues: {
   email: "",
   password: "",
  },

  validationSchema: Yup.object({
   email: Yup.string().email("Invalid email address").required("Required"),
   password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  }),

  onSubmit: (values) => handleSubmit(values),
 });

 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword((show) => !show);
 const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
 };

 const handleSubmit = (values: { email: string; password: string }) => {
  console.log("values", values);
  dispatch(signInUserRequest(values));
  //   dispatch(loginUser(values));

  //   navigate(ROUTES.MY_PLAYLISTS);
  login();
 };

 return (
  <Wrapper background={background}>
   <Box
    component="form"
    onSubmit={formik.handleSubmit}
    sx={{
     borderRadius: 2,
     p: 1,
     bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
     display: "flex",
     flexDirection: "column",
     alignItems: "center",

     "& .MuiOutlinedInput-input": {
      p: "14px",
     },
    }}>
    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={Boolean(formik.errors.email)}>
     <InputLabel htmlFor="outline-adornment-email">User email</InputLabel>
     <OutlinedInput
      id="outline-adornment-email"
      label="User email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
     />
     {formik.errors.email ? (
      <FormHelperText id="emailError">{formik.errors.email}</FormHelperText>
     ) : null}
    </FormControl>

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={Boolean(formik.errors.password)}>
     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
     <OutlinedInput
      id="outlined-adornment-password"
      name="password"
      label="Password"
      type={showPassword ? "text" : "password"}
      value={formik.values.password}
      onChange={formik.handleChange}
      endAdornment={
       <InputAdornment position="end">
        <IconButton
         aria-label="toggle password visibility"
         onClick={handleClickShowPassword}
         onMouseDown={handleMouseDownPassword}
         edge="end">
         {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
       </InputAdornment>
      }
     />
     {formik.errors.password ? (
      <FormHelperText id="passwordError">
       {formik.errors.password}
      </FormHelperText>
     ) : null}
    </FormControl>

    <Button
     type="submit"
     sx={{
      textDecoration: "underline",
      fontSize: 16,
      "&:hover": {
       color: (theme) => theme.palette.common.black,
      },
     }}>
     Log in
    </Button>

    <Typography variant="body1">
     No account yet?
     <Link href={ROUTES.REGISTRATION} underline="hover">
      Sign up
     </Link>
    </Typography>
   </Box>
   <div style={{ width: "100%" }}>
    {/* <PlacementForm setPlacement={setPlacement} /> */}
    <div style={{ padding: "4rem 0", textAlign: "center" }}>
     {/* <Anchor ref={setAnchor} aria-describedby="placement-popper"> */}
     <BasePopup id="placement-popper" open offset={4}>
      <PopupBody>The content of the Popup.</PopupBody>
     </BasePopup>
    </div>
   </div>
  </Wrapper>
 );
};

const PopupBody = styled("div")(
 ({ theme }: { theme: Theme }) => css`
  padding: 0.5rem 1rem;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border-radius: 8px;
  box-shadow: ${theme.palette.mode === "dark"
   ? `0px 4px 8px rgb(0 0 0 / 0.7)`
   : `0px 4px 8px rgb(0 0 0 / 0.1)`};
  min-height: 3rem;
  display: flex;
  align-items: center;
 `
);
// const Anchor = styled("span")(
//  ({ theme }: { theme: Theme }) => css`
//   display: inline-block;
//   background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//  `
// );
