import React, { useMemo, useState } from "react";
import {
 useReactTable,
 getCoreRowModel,
 getExpandedRowModel,
 flexRender,
 ColumnDef,
 Row,
} from "@tanstack/react-table";
import {
 AllPlaylistsDataType,
 PlaylistDataType,
 PlaylistTableTestProps,
 TrackDataType,
} from "../redux/types";
import {
 Box,
 Collapse,
 IconButton,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const ExpandedPlaylistRow = (
 row: Row<AllPlaylistsDataType | PlaylistDataType | TrackDataType>
) => {
 const [expandedPlaylistId, setExpandedPlaylistId] = useState<string | null>(
  null
 );

 const playlists = "subRows" in row.original ? row.original.subRows : [];

 function func(playlist: PlaylistDataType) {
  if (playlist.subRows.length === 0) {
   return null;
  }
  return expandedPlaylistId === playlist.playlistId ? (
   <KeyboardArrowUp />
  ) : (
   <KeyboardArrowDown />
  );
 }

 if (!playlists.length) {
  return null;
 }

 return playlists.map((playlist) => {
  if ("playlistName" in playlist) {
   const playlistId = playlist.playlistId;
   return (
    <>
     <TableRow key={playlistId}>
      <TableCell sx={{ padding: "0" }}>
       <IconButton
        onClick={() =>
         setExpandedPlaylistId((prev) =>
          prev === playlistId ? null : playlistId
         )
        }>
        {func(playlist)}
       </IconButton>
      </TableCell>
      <TableCell
       style={{
        cursor: "pointer",
        padding: "5px 0",
       }}>
       {playlist.playlistName}
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell sx={{ paddingTop: "0", paddingBottom: "0" }}>
       <Collapse in={expandedPlaylistId === playlistId} unmountOnExit>
        <Table>
         <TableBody>
          {playlist.subRows.map((track) => (
           <TableRow key={track.trackId}>
            <TableCell>{track.originalFileName}</TableCell>
           </TableRow>
          ))}
         </TableBody>
        </Table>
       </Collapse>
      </TableCell>
     </TableRow>
    </>
   );
  }
  return null;
 });

 //    return <TableRow>
 //    <TableCell
 //     colSpan={row.getVisibleCells().length}
 //     sx={{ padding: "0px", paddingLeft: "20px" }}>
 //     <Table sx={{ width: "100%" }}>
 //      <TableBody>
 //       {"subRows" in row.original &&
 //        (row.original.subRows as PlaylistDataType[]).map(
 //         (playlist: PlaylistDataType) => {
 //          console.log("row", row);
 //          console.log("cells", row.getVisibleCells());
 //          return (
 //           expandedPlaylistId === playlist.playlistId &&
 //           playlist.subRows.map((track: TrackDataType) => (
 //            <TableRow key={track.trackId}>
 //             <TableCell
 //              sx={{
 //               padding: "5px",
 //               border: "1px solid black",
 //               cursor: "pointer",
 //              }}>
 //              {track.originalFileName}
 //             </TableCell>
 //            </TableRow>
 //           ))
 //          );
 //         }
 //        )}
 //      </TableBody>
 //     </Table>
 //    </TableCell>
 //   </TableRow>
 //  )
};

export const PlaylistTableTest = ({ data }: PlaylistTableTestProps) => {
 const columns = useMemo<
  ColumnDef<AllPlaylistsDataType | PlaylistDataType | TrackDataType>[]
 >(
  () => [
   {
    header: "User Name",
    accessorKey: "userName",
    cell: ({ getValue }) => getValue(),
   },
   {
    header: "Playlist Name",
    accessorKey: "playlistName",
    cell: ({ row }) => ExpandedPlaylistRow(row),
   },
  ],
  []
 );

 const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  getSubRows: (
   row: AllPlaylistsDataType | PlaylistDataType | TrackDataType
  ) => {
   if ("subRows" in row) {
    return row.subRows;
   }
   return undefined;
  },
 });

 return (
  <Table
   sx={{
    width: "100%",
    border: "1px solid black",
    bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
   }}>
   <TableHead>
    {table.getHeaderGroups().map((headerGroup) => (
     <TableRow key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
       <TableCell
        key={header.id}
        sx={{ padding: "10px", borderBottom: "2px solid black" }}>
        {flexRender(header.column.columnDef.header, header.getContext())}
       </TableCell>
      ))}
     </TableRow>
    ))}
   </TableHead>
   <TableBody>
    {table.getRowModel().rows.map((row) => (
     <TableRow>
      {row.getVisibleCells().map((cell) => (
       <TableCell key={cell.id} sx={{ border: "1px solid black" }}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
       </TableCell>
      ))}
     </TableRow>
    ))}
   </TableBody>
  </Table>
 );
};
