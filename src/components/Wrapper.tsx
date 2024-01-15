import React from "react";

type Props = {
 background: string;
 children: React.ReactNode;
};

export const Wrapper = ({ background, children }: Props) => {

 return (
  <div
   style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    padding: "10px",
   }}>
   {children}
  </div>
 );
};
