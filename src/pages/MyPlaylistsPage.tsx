import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getAllPlaylists } from "../redux/sagas/sagas";
import { AllPlaylistsDataType } from "../redux/types";
import { PlaylistTable } from "../components/PlaylistTable";
import { PlaylistTableTest } from "../components/PlaylistTableTest";
import CollapsibleTable from "../components/needToDelete";

const TemplateTable = () => {
 return (
  <Wrapper background={background}>
   <NavigationBar />
   {/* <ExampleTable />  */}
   {/* <Box
       sx={{
        height: "20px",
        width: "20px",
        color: "red",
       }}>
       <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
      </Box> */}

   <table
    style={{
     border: "2px solid blue",
     borderRadius: "2rem",
     padding: "8px",
    }}>
    <thead>
     <tr>
      <th>User</th>
      <th>Playlists</th>
      <th>Tracks</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>user1</td>
      <td>
       <ul>
        <li onClick={(e) => console.log(e.target)}>playlist1</li>
        <li onClick={(e) => console.log(e.currentTarget.value)}>playlist2</li>
       </ul>
      </td>
      <td>
       <ul
        id="playlist1"
        style={{
         display: "none",
        }}>
        <li>track1</li>
        <li>track2</li>
        <li>track3</li>
       </ul>
       <ul
        id="playlist2"
        style={{
         display: "none",
        }}>
        <li>track1</li>
        <li>track2</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>user2</td>
      <td>
       <ul>
        <li>playlist1</li>
       </ul>
      </td>
      <td>
       <ul>
        <li>track1</li>
        <li>track2</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>user3</td>
      <td>
       <ul>
        <li>playlist1</li>
        <li>playlist2</li>
        <li>playlist3</li>
       </ul>
      </td>
      <td>
       <ul>
        <li>track1</li>
        <li>track2</li>
        <li>track3</li>
       </ul>
       <ul>
        <li>track1</li>
        <li>track2</li>
       </ul>
       <ul>
        <li>track1</li>
        <li>track2</li>
        <li>track3</li>
        <li>track4</li>
        <li>track5</li>
       </ul>
      </td>
     </tr>
    </tbody>
   </table>
  </Wrapper>
 );
};

export const MyPlaylistsPage = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getAllPlaylists()); // Вызов dispatch с экшеном
 }, [dispatch]); // Зависимость добавлена для избежания бесконечного цикла вызовов

 const data: AllPlaylistsDataType[] = useSelector(
  (state: RootState) => state.allPlaylists
 );

 console.log("MyPlaylistsPage data", data);

 return (
  <Wrapper background={background}>
   <NavigationBar />
   {data.length > 0 ? (
    <>
     {/* <PlaylistTable data={data} /> need to delete it */}
     {/* <PlaylistTableTest {...data} /> */}
     <PlaylistTableTest data={data} />
     {/* <CollapsibleTable /> */}
    </>
   ) : (
    // <TemplateTable />
    //<PlaylistTableTest />
    <div>Loading...</div>
   )}
  </Wrapper>
 );
};
