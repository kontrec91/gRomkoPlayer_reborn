import React from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const AllPlaylistsPage = () => {
 const allPlaylists = useSelector((state: RootState) => state.allPlaylists);

 return (
  <Wrapper background={background}>
   <NavigationBar />
   <h1>This is all playlists page</h1>
  </Wrapper>
 );
};
