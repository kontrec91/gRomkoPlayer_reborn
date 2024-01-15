import React, { MouseEvent, useState } from "react";

import { Wrapper } from "../components/Wrapper";
import background from "../images/headphones.jpg";
import {
 Button,
 FormControl,
 FormHelperText,
 InputLabel,
 Link,
 OutlinedInput,
 Typography,
 Box,
 InputAdornment,
 IconButton,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import * as Yup from "yup";

import { ROUTES } from "../constants/routes";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

export const RegistrationPage = () => {
 const navigate = useNavigate();

 const formik = useFormik({
  initialValues: {
   login: "",
   email: "",
   password: "",
   confirmPassword: "",
  },
  validationSchema: Yup.object({
   login: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
   email: Yup.string().email("Invalid email address").required("Required"),
   password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),

   confirmPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password")], "Passwords must match")
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
  console.log("Submit", values);
  navigate(ROUTES.MY_PLAYLISTS);
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
     error={Boolean(formik.errors.login)}>
     <InputLabel htmlFor="outline-adornment-name">User name</InputLabel>
     <OutlinedInput
      id="outline-adornment-name"
      name="login"
      label="User name"
      value={formik.values.login}
      onChange={formik.handleChange}
     />
     {formik.errors.login ? (
      <FormHelperText id="nameError">{formik.errors.login}</FormHelperText>
     ) : null}
    </FormControl>

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={Boolean(formik.errors.email)}>
     <InputLabel htmlFor="outline-adornment-email">User email</InputLabel>
     <OutlinedInput
      id="outline-adornment-email"
      name="email"
      type="email"
      label="User email"
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
      label="Password"
     />
     {formik.errors.password ? (
      <FormHelperText id="passwordError">
       {formik.errors.password}
      </FormHelperText>
     ) : null}
    </FormControl>

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={Boolean(formik.errors.confirmPassword)}>
     <InputLabel htmlFor="outlined-adornment-confirm-password">
      Confirm password
     </InputLabel>
     <OutlinedInput
      id="outlined-adornment-confirm-password"
      name="confirmPassword"
      type={showPassword ? "text" : "password"}
      value={formik.values.confirmPassword}
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
      label="Confirm Password"
     />
     {formik.errors.confirmPassword ? (
      <FormHelperText id="passwordError">
       {formik.errors.confirmPassword}
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
     Submit
    </Button>
    <Typography variant="body1">Back to</Typography>
    <Link href={ROUTES.LOGIN} underline="hover">
     Log in
    </Link>
   </Box>
  </Wrapper>
 );
};
