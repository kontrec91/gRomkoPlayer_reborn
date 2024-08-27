// import React, { useEffect } from "react";
// import background from "../images/girl.jpg";
// import { Wrapper } from "../components/Wrapper";
// import { NavigationBar } from "../components/NavigationBar";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { getAllPlaylists } from "../redux/sagas/sagas";

// import { AllPlaylistsDataType } from "../redux/types";
// import { PlaylistTable } from "../components/PlaylistTable";

// export const MyPlaylistsPage = () => {
//  const dispatch = useDispatch();

//  useEffect(() => {
//   dispatch(getAllPlaylists()); // Вызов dispatch с экшеном
//  }, [dispatch]); // Зависимость добавлена для избежания бесконечного цикла вызовов

//  const data: AllPlaylistsDataType[] = useSelector(
//   (state: RootState) => state.allPlaylists
//  );

//  //  const columns = useMemo<ColumnDef<AllPlaylistsDataType>[]>(
//  //   () => [
//  //    {
//  //     // accessorFn: (row) => row.userName,
//  //     accessorKey: "userName",
//  //     header: ({ table }) => (
//  //      <>
//  //       <button
//  //        {...{
//  //         onClick: table.getToggleAllRowsExpandedHandler(),
//  //        }}>
//  //        {table.getIsAllRowsExpanded() ? "👇" : "👉"}
//  //       </button>
//  //       User Name
//  //      </>
//  //     ),

//  //     id: "userName",
//  //     //cell: (props) => props.row.original.userName,
//  //     // header: () => "User",
//  //     cell: (
//  //      { row, getValue } //maybe it isn`t need here
//  //     ) => {
//  //      console.log("row", typeof row, row);
//  //      console.log("row.getValue", getValue<boolean>());
//  //      return (
//  //       <>
//  //        {row.getCanExpand() ? (
//  //         <button
//  //          {...{
//  //           onClick: row.getToggleExpandedHandler(),
//  //           style: { cursor: "pointer" },
//  //          }}>
//  //          {row.getIsExpanded() ? "👇" : "👉"}
//  //         </button>
//  //        ) : (
//  //         "🔵"
//  //        )}
//  //        {getValue()}
//  //       </>
//  //      );
//  //     },
//  //    },
//  //    {
//  //     accessorFn: (row) => row.playlistsData,
//  //     id: "Playlists",
//  //     header: () => "Playlists",
//  //     cell: (props) =>
//  //      props.row.original.playlistsData.map((item: { playlistName: string }) => (
//  //       <div>{item.playlistName}</div>
//  //      )),
//  //    },
//  //    {
//  //     accessorFn: (row) => row.playlistsData,
//  //     id: "Tracks",
//  //     header: () => "Tracks",
//  //     cell: (props) => {
//  //      console.log(
//  //       "props.row.original.playlistsData",
//  //       props.row.original.playlistsData
//  //      );
//  //      return props.row.original.playlistsData.flatMap(
//  //       (item: PlaylistDataType) => (
//  //        <ul>
//  //         {item.playlistsData.map((track) => (
//  //          <li>{track.originalFileName}</li>
//  //         ))}
//  //        </ul>
//  //       )
//  //      );
//  //     },
//  //    },
//  //   ],
//  //   []
//  //  );

//  return (
//   <Wrapper background={background}>
//    <NavigationBar />
//    <PlaylistTable data={data} />

//    {/* <ExampleTable />  */}
//    {/* <Box
//     sx={{
//      height: "20px",
//      width: "20px",
//      color: "red",
//     }}>
//     <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
//    </Box> */}

//    {/* <table
//     style={{
//      border: "2px solid blue",
//      borderRadius: "2rem",
//      padding: "8px",
//     }}>
//     <thead>
//      <tr>
//       <th>User</th>
//       <th>Playlists</th>
//       <th>Tracks</th>
//      </tr>
//     </thead>
//     <tbody>
//      <tr>
//       <td>user1</td>
//       <td>
//        <ul>
//         <li
//          onClick={(e) => console.log(e.target)}>
//          playlist1
//         </li>
//         <li onClick={(e) => console.log(e.currentTarget.value)}>playlist2</li>
//        </ul>
//       </td>
//       <td>
//        <ul
//         id="playlist1"
//         style={{
//          display: "none",
//         }}>
//         <li>track1</li>
//         <li>track2</li>
//         <li>track3</li>
//        </ul>
//        <ul
//         id="playlist2"
//         style={{
//          display: "none",
//         }}>
//         <li>track1</li>
//         <li>track2</li>
//        </ul>
//       </td>
//      </tr>
//      <tr>
//       <td>user2</td>
//       <td>
//        <ul>
//         <li>playlist1</li>
//        </ul>
//       </td>
//       <td>
//        <ul>
//         <li>track1</li>
//         <li>track2</li>
//        </ul>
//       </td>
//      </tr>
//      <tr>
//       <td>user3</td>
//       <td>
//        <ul>
//         <li>playlist1</li>
//         <li>playlist2</li>
//         <li>playlist3</li>
//        </ul>
//       </td>
//       <td>
//        <ul>
//         <li>track1</li>
//         <li>track2</li>
//         <li>track3</li>
//        </ul>
//        <ul>
//         <li>track1</li>
//         <li>track2</li>
//        </ul>
//        <ul>
//         <li>track1</li>
//         <li>track2</li>
//         <li>track3</li>
//         <li>track4</li>
//         <li>track5</li>
//        </ul>
//       </td>
//      </tr>
//     </tbody>
//    </table> */}
//   </Wrapper>
//  );
// };

import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getAllPlaylists } from "../redux/sagas/sagas";
import { AllPlaylistsDataType } from "../redux/types";
import { PlaylistTable } from "../components/PlaylistTable";

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
   {data.length > 0 ? <PlaylistTable data={data} /> : <div>Loading...</div>}
  </Wrapper>
 );
};
