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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
   }}>
   {children}
  </div>
 );
};
