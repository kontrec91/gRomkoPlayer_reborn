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
        <div
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
        </div>
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
  <>
   <table style={{ width: "100%", border: "1px solid black" }}>
    <thead>
     {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
       {headerGroup.headers.map((header) => (
        <th
         key={header.id}
         style={{ padding: "10px", borderBottom: "2px solid black" }}>
         {flexRender(header.column.columnDef.header, header.getContext())}
        </th>
       ))}
      </tr>
     ))}
    </thead>
    <tbody>
     {table.getRowModel().rows.map((row) => (
      <React.Fragment key={row.id}>
       <tr>
        {/* playlists */}
        {row.getVisibleCells().map((cell) => {
         console.log("cell.getContext()", cell.getContext().row.original);
         console.log("cell.column.columnDef.cell", cell.column.columnDef.cell);
         return (
          <td
           key={cell.id}
           style={{ padding: "10px", border: "1px solid black" }}>
           {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
         );
        })}
       </tr>
       {/* tracks */}
       {expandedPlaylistId && (
        <tr>
         <td colSpan={row.getVisibleCells().length}>
          <table style={{ width: "100%", paddingLeft: "20px" }}>
           <tbody>
            {"subRows" in row.original &&
             (row.original.subRows as PlaylistDataType[]).map(
              (playlist: PlaylistDataType) => {
               console.log("row", row);
               console.log("cells", row.getVisibleCells());
               return (
                expandedPlaylistId === playlist.playlistId &&
                playlist.subRows.map((track: TrackDataType) => (
                 <tr key={track.trackId}>
                  <td style={{ padding: "5px", border: "1px solid black" }}>
                   {track.originalFileName}
                  </td>
                 </tr>
                ))
               );
              }
             )}
           </tbody>
          </table>
         </td>
        </tr>
       )}
      </React.Fragment>
     ))}
    </tbody>
   </table>
  </>
 );
};
