import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
// import * as React from 'react';
// import Button from "@mui/material/Button";
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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginPage = () => {
 const [validationErrors, setValidationErrors] = useState({
  nameError: false,
  emailError: false,
  passwordError: false,
 });
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword((show) => !show);
 const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>
 ) => {
  event.preventDefault();
 };
 return (
  <Box
   sx={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    // background-color: #282c34;
    // min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // font-size: calc(10px + 2vmin);
    // color: white;
   }}>
   <Box
    component="form"
    sx={{
     //  border: 1,
     borderRadius: 2,
     p: 1,
     bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
     display: "flex",
     flexDirection: "column",
     alignItems: "center",

     "& .MuiOutlinedInput-input": {
      p: '14px',
     },
     "& .MuiInputLabel-root ": {},
    }}>
    {/* <TextField
     required
     id="userName"
     label="User name"
     error={validationErrors.nameError}
     helperText={validationErrors.nameError && "Enter valid name"}
     sx={{
      mb: 2,
     }}
    />

    <TextField
     required
     id="userEmail"
     label="E-mail"
     error={validationErrors.emailError}
     helperText={validationErrors.emailError && "Enter valid email"}
     sx={{
      mb: 2,
     }}
    />
    <TextField
     required
     id="userPassword"
     label="Password"
     type="password"
     error={validationErrors.passwordError}
     helperText={validationErrors.passwordError && "Enter valid password"}
     sx={{
      mb: 2,
     }}
    /> */}

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={validationErrors.nameError}>
     <InputLabel htmlFor="outline-adornment-name">User name</InputLabel>
     <OutlinedInput
      id="outline-adornment-name"
      label="User name"
      //   sx={{
      //    p: 0,
      //    m:0
      //   }}
     />
     {validationErrors.nameError && (
      <FormHelperText id="nameError">Enter valid name</FormHelperText>
     )}
    </FormControl>

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={validationErrors.emailError}>
     <InputLabel htmlFor="outline-adornment-email">User email</InputLabel>
     <OutlinedInput id="outline-adornment-email" label="User email" />
     {validationErrors.emailError && (
      <FormHelperText id="emailError">Enter valid email</FormHelperText>
     )}
    </FormControl>

    <FormControl
     sx={{ m: 1, width: "30ch" }}
     variant="outlined"
     error={validationErrors.passwordError}>
     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
     <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? "text" : "password"}
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
     {validationErrors.passwordError && (
      <FormHelperText id="passwordError">Enter valid password</FormHelperText>
     )}
    </FormControl>

    <Button
     sx={{
      textDecoration: "underline",
      fontSize: 16,
      "&:hover": {
       //    color: (theme) => theme.palette.primary.light,
       color: (theme) => theme.palette.common.black,
      },
     }}>
     Log in
    </Button>
    <Typography variant="body1">
     No account yet?
     <Button
      sx={{
       textDecoration: "underline",
       fontSize: 16,
       "&:hover": {
        // color: (theme) => theme.palette.primary.light,
        color: (theme) => theme.palette.common.black,
       },
      }}>
      Sign up
     </Button>
    </Typography>
   </Box>
  </Box>
 );
};
