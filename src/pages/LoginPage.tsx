import React, { useState, MouseEvent } from "react";
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

import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ROUTES } from "../constants/routes";
import { Wrapper } from "../components/Wrapper";
import { useNavigate } from "react-router";

export const LoginPage = () => {
 const navigate = useNavigate();
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
  </Wrapper>
 );
};
