import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { MyPlaylistPage } from "./pages/MyPlaylistPage";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ROUTES } from "./constants/routes";

function App() {
 return (
  <Box
   sx={{
    display: "flex",
    minHeight: "100vh", //needed to display content on the entire page
   }}>
   <Routes>
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.MY_PLAYLISTS} element={<MyPlaylistPage />} />
    <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />}></Route>
   </Routes>
  </Box>
 );
}

export default App;
