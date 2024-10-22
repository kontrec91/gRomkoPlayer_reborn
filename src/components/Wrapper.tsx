import { Box } from "@mui/system";
import React from "react";

type Props = {
 background: string;
 children: React.ReactNode;
};

export const Wrapper = ({ background, children }: Props) => {
 return (
  <Box
   sx={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    padding: "10px",
   }}>
   {children}
  </Box>
 );
};
