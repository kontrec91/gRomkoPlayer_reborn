import React, { useMemo, useState } from "react";
import {
 useReactTable,
 getCoreRowModel,
 getExpandedRowModel,
 flexRender,
 ColumnDef,
} from "@tanstack/react-table";
import {
 AllPlaylistsDataType,
 PlaylistDataType,
 PlaylistTableTestProps,
 TrackDataType,
} from "../redux/types";
import {
 Box,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

// import { ElderlyRounded, GMobiledata } from "@mui/icons-material";

export const PlaylistTableTest = ({ data }: PlaylistTableTestProps) => {
 const [expandedPlaylistId, setExpandedPlaylistId] = useState<string | null>(
  null
 );

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
    cell: ({ row }) => {
     const playlists = "subRows" in row.original ? row.original.subRows : [];
     console.log("playlists", playlists);
     // Отображаем плейлисты
     if (!playlists.length) {
      return null;
     }
     return playlists.map((playlist) => {
      if ("playlistName" in playlist) {
       console.log('"playlistName" in playlist', playlist);
       return (
        <Box>
         <TableCell
          key={playlist.playlistId}
          onClick={() => {
           const playlistId = playlist.playlistId;
           if (playlist.subRows.length) {
            setExpandedPlaylistId((prev) =>
             prev === playlistId ? null : playlistId
            );
           }
          }}
          style={{
           cursor: "pointer",
           padding: "5px 0",
          }}>
          {!!playlist.subRows.length
           ? `${expandedPlaylistId === playlist.playlistId ? "▼" : "▶"}`
           : null}
          {playlist.playlistName}
         </TableCell>
        </Box>
       );
      }
      console.log("tracks is here, render null");
      return null;
     });
    },
   },
  ],
  [expandedPlaylistId]
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
     <React.Fragment key={row.id}>
      <TableRow>
       {/* playlists */}
       {row.getVisibleCells().map((cell) => {
        console.log("cell.getContext()", cell.getContext().row.original);
        console.log("cell.column.columnDef.cell", cell.column.columnDef.cell);
        return (
         <TableCell
          key={cell.id}
          sx={{ padding: "10px", border: "1px solid black" }}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
         </TableCell>
        );
       })}
      </TableRow>
      {/* tracks */}
      {expandedPlaylistId && (
       <TableRow>
        <TableCell
         colSpan={row.getVisibleCells().length}
         sx={{ padding: "0px", paddingLeft: "20px" }}>
         <Table sx={{ width: "100%" }}>
          <TableBody>
           {"subRows" in row.original &&
            (row.original.subRows as PlaylistDataType[]).map(
             (playlist: PlaylistDataType) => {
              console.log("row", row);
              console.log("cells", row.getVisibleCells());
              return (
               expandedPlaylistId === playlist.playlistId &&
               playlist.subRows.map((track: TrackDataType) => (
                <TableRow key={track.trackId}>
                 <TableCell
                  sx={{
                   padding: "5px",
                   border: "1px solid black",
                   cursor: "pointer",
                  }}>
                  {track.originalFileName}
                 </TableCell>
                </TableRow>
               ))
              );
             }
            )}
          </TableBody>
         </Table>
        </TableCell>
       </TableRow>
      )}
     </React.Fragment>
    ))}
   </TableBody>
  </Table>
 );
};
