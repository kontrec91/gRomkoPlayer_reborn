import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import { getAllPlaylists } from "../redux/sagas/sagas";
import { AllPlaylistsDataType } from "../redux/types";
import { PlaylistTable } from "../components/PlaylistTable";
import { Player } from "../components/Player";
import { Box } from "@mui/system";
// import { getAllPlaylists } from "../redux/sagas/sagas";

export const MyPlaylistsPage = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  //   dispatch(getAllPlaylists()); // Вызов dispatch с экшеном
  console.log("getAllPlaylists");
 }, [dispatch]); // Зависимость добавлена для избежания бесконечного цикла вызовов

 const data: AllPlaylistsDataType[] =
  //  InitialStateType
//   useSelector((state: RootState) => state.rootReducer.allPlaylists);
useSelector((state: RootState) => state.allPlaylists);

 console.log("MyPlaylistsPage data", data);

 return (
  <Wrapper background={background}>
   <NavigationBar />
   {data.length > 0 ? <PlaylistTable data={data} /> : <Box>Loading...</Box>}
   <Player />
  </Wrapper>
 );
};
