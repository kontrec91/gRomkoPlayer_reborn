import React from "react";

export const Wrapper = (background: any, children: any) => {
 return (
  <div
   style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    // width: "100%",
    // height: "100%",
    display: "flex",
    minHeight: "100vh",
    // alignItems: "center",

    // background-color: #282c34;
    // min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // font-size: calc(10px + 2vmin);
    // color: white;
   }}
  >
   {/* <h1>this is login page</h1>
   <Button variant="contained"> Hello world </Button> */}
   {children}
  </div>
 );
};
