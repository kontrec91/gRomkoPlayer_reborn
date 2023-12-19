// import logo from './logo.svg';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";

import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { MyPlaylistPage } from "./pages/MyPlaylistPage";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

// import { LoginPage } from "./pages";

// import {Provider} from 'react-redux'

function App() {
 return (
  // <Provider>
  //   <Router>
  //     {/* <Switch> */}
  //       <Route path='/' component={<h1>this is logon page</h1>}></Route>
  //     {/* </Switch> */}
  //   </Router>
  // </Provider>
  //   <section
  //    style={{
  //     display: "flex",
  //     alignContent: "center",
  //     justifyContent: "center",
  //     minHeight: "100%",
  //     flexDirection: "column",
  //     // align-content: center;
  //     // justify-content: center;
  //     // min-height: 100%;
  //     // flex-direction: column;
  //     // max-width: 400px;
  //    }}
  //   >

  //   </section>
  <Box
   sx={{
    display: "flex",
    minHeight: "100vh", //needed to display content on the entire page
   }}
  >
   <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/my-playlists" element={<MyPlaylistPage />} />
   </Routes>
  </Box>
 );
}

export default App;
