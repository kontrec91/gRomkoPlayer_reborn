// import { Box } from "@mui/system";
// import {
//  ColumnDef,
//  ExpandedState,
//  flexRender,
//  getCoreRowModel,
//  getExpandedRowModel,
//  getFilteredRowModel,
//  getPaginationRowModel,
//  useReactTable,
// } from "@tanstack/react-table";
// import { AllPlaylistsDataType, PlaylistDataType } from "../redux/types";
// import { useMemo, useState } from "react";

// //export const PlaylistTable = (data: AllPlaylistsDataType[]) => {
// export const PlaylistTable = ({ data }: { data: AllPlaylistsDataType[] }) => {
//  const [expanded, setExpanded] = useState<ExpandedState>({});
//  console.log("PlaylistTable data", data);
//  const columns = useMemo<ColumnDef<AllPlaylistsDataType>[]>(
//   () => [
//    {
//     accessorKey: "userName",
//     id: "userName",
//     cell: ({ getValue }) => getValue(),
//     header: () => "User",
//    },
//    {
//     accessorKey: "playlistName",
//     id: "Playlists",
//     header: () => "Playlists",
//     cell: ({ row }) => (
//      <ul>
//       {row.original.subRows.map((playlist: PlaylistDataType) => (
//        <li key={playlist.playlistName}>{playlist.playlistName}</li>
//       ))}
//      </ul>
//     ),
//    },

//    {
//     accessorKey: "originalFileName",
//     id: "Tracks",
//     header: "Tracks",
//     cell: ({ row }) => (
//      <ul>
//       {row.original.subRows.map((playlist) =>
//        playlist.subRows.map((track) => <li>{track.originalFileName}</li>)
//       )}
//      </ul>
//     ),
//    },
//    //    {
//    //     accessorKey: "playlistsData",
//    //     id: "Tracks",
//    //     header: "Tracks",
//    //     cell: ({ getValue }) => getValue(),
//    //     // cell: ({ row }) =>
//    //     //  row.original.playlistsData.map(
//    //     //   (playlist) =>
//    //     //    //   <Box
//    //     //    //    sx={{
//    //     //    //     position: "absolute",
//    //     //    //     border: "1px solid grey",
//    //     //    //     // marginBottom: "10wh",
//    //     //    //     left: "11rem",
//    //     //    //     display: "flex",
//    //     //    //     flexDirection: "row",
//    //     //    //     width: "100px",
//    //     //    //    }}>
//    //     //    //   <ul>
//    //     //    playlist.playlistsData.map((track) => (
//    //     //     <span>{track.originalFileName}</span>
//    //     //    ))

//    //     //   //   </Box>
//    //     //  ),
//    //    },
//   ],
//   []
//  );

//  const table = useReactTable({
//   data: [data],
//   columns,
//   getCoreRowModel: getCoreRowModel(),
//   state: {
//    expanded,
//   },
//   getSubRows: (row) => row.subRows,
//   onExpandedChange: setExpanded,
//   getPaginationRowModel: getPaginationRowModel(),
//   getFilteredRowModel: getFilteredRowModel(),
//   getExpandedRowModel: getExpandedRowModel(),
//   debugTable: true,
//  });

//  return (
//   <Box
//    sx={{
//     border: "2px solid blue",
//     borderRadius: "2rem",
//     height: "100%",
//     marginTop: "10vh",
//     // position: "relative",
//    }}>
//    <table
//     style={{
//      marginTop: "1rem",
//     }}>
//     <thead>
//      {table.getHeaderGroups().map((headerGroup) => (
//       <tr key={headerGroup.id}>
//        {headerGroup.headers.map((header) => (
//         <th key={header.id}>
//          {flexRender(header.column.columnDef.header, header.getContext())}
//         </th>
//        ))}
//       </tr>
//      ))}
//     </thead>
//     <tbody>
//      {table.getRowModel().rows.map((row) => (
//       <tr key={row.id}>
//        {row.getVisibleCells().map((cell) => (
//         <td key={cell.id}>
//          {flexRender(cell.column.columnDef.cell, cell.getContext())}
//         </td>
//        ))}
//       </tr>
//      ))}
//     </tbody>
//    </table>
//   </Box>
//  );
// };

import { Box } from "@mui/system";
import {
 ColumnDef,
 ExpandedState,
 flexRender,
 getCoreRowModel,
 getExpandedRowModel,
 getFilteredRowModel,
 getPaginationRowModel,
 useReactTable,
} from "@tanstack/react-table";
import { AllPlaylistsDataType, PlaylistDataType } from "../redux/types";
import { useMemo, useState } from "react";

export const PlaylistTable = ({ data }: { data: AllPlaylistsDataType[] }) => {
 const [expanded, setExpanded] = useState<ExpandedState>({});
 console.log("PlaylistTable data", data);

 const columns = useMemo<ColumnDef<AllPlaylistsDataType>[]>(
  () => [
   {
    accessorKey: "userName",
    id: "userName",
    cell: ({ getValue }) => getValue(),
    header: () => "User",
   },
   {
    id: "Playlists",
    header: () => "Playlists",
    cell: ({ row }) => {
     const subRows = row.original.subRows;
     console.log("row", row.original);
     if (!subRows || subRows.length === 0) {
      return <div>No playlists available</div>;
     }
     return (
      <ul>
       {subRows.map((playlist: PlaylistDataType) => (
        <li key={playlist.playlistName}>{playlist.playlistName}</li>
       ))}
      </ul>
     );
    },
   },
  ],
  []
 );

 const table = useReactTable({
  data: data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
   expanded,
  },
  // getSubRows: (row: AllPlaylistsDataType) => row.subRows,
  onExpandedChange: setExpanded,
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  debugTable: true,
 });

 return (
  <Box
   sx={{
    border: "2px solid blue",
    borderRadius: "2rem",
    height: "100%",
    marginTop: "10vh",
   }}>
   <table
    style={{
     marginTop: "1rem",
    }}>
    <thead>
     {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
       {headerGroup.headers.map((header) => (
        <th key={header.id}>
         {flexRender(header.column.columnDef.header, header.getContext())}
        </th>
       ))}
      </tr>
     ))}
    </thead>
    <tbody>
     {table.getRowModel().rows.map((row) => (
      <tr key={row.id}>
       {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>
         {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>
  </Box>
 );
};
