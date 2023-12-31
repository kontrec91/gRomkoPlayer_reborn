import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
//  <section
//   style={{
//    display: "flex",
//    alignContent: "center",
//    justifyContent: "center",
//    minHeight: "100%",
//    flexDirection: "column",
//    // align-content: center;
//    // justify-content: center;
//    // min-height: 100%;
//    // flex-direction: column;
//    // max-width: 400px;
//   }}
//  >
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>
//  </section>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
