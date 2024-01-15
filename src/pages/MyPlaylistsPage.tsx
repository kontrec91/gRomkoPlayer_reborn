import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { getMyPlaylist } from "../api/getMyPlaylist";

export const MyPlaylistsPage = () => {
 useEffect(() => getMyPlaylist(), []);

 return (
  <Wrapper background={background}>
   <NavigationBar />
   <h1>This is my playlists page</h1>
  </Wrapper>
 );
};
