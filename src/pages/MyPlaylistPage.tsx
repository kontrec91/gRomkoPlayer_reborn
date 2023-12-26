import { Box } from "@mui/system";
import React from "react";
import background from "../images/girl.jpg";

export const MyPlaylistPage = () => {
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
   }}>
   {/* <h1>This is my playlist page</h1> */}
  </Box>
 );
};
