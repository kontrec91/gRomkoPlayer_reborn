import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { getMyPlaylist } from "../api/getMyPlaylist";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const SearchPage = () => {
 //  useEffect(() => getMyPlaylist(), []);
 const allPlaylists = useSelector((state: RootState) => state.allPlaylists);

 console.log('allPlaylists', allPlaylists)
 return (
  <Wrapper background={background}>
   <NavigationBar />
   <h1>This search page</h1>
  </Wrapper>
 );
};
