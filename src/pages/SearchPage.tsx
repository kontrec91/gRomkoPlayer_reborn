import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { getMyPlaylist } from "../api/getMyPlaylist";

export const SearchPage = () => {
 useEffect(() => getMyPlaylist(), []);

 return (
  <Wrapper background={background}>
   <NavigationBar />
   <h1>This search page</h1>
  </Wrapper>
 );
};
