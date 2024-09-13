// import React, { useMemo } from "react";
// import {
//  useReactTable,
//  getCoreRowModel,
//  getExpandedRowModel,
//  flexRender,
//  ColumnDef,
// } from "@tanstack/react-table";
// import {
//  AllPlaylistsDataType,
//  PlaylistDataType,
//  PlaylistTableTestProps,
//  TrackDataType,
// } from "../redux/types";

// export const PlaylistTableTest = ({ data }: PlaylistTableTestProps) => {
//  const columns = useMemo<
//   ColumnDef<AllPlaylistsDataType | PlaylistDataType | TrackDataType>[]
//  >(
//   () => [
//    {
//     header: "User Name",
//     accessorKey: "userName",
//     cell: ({ getValue }) => getValue(),
//    },
//    {
//     header: "Playlist Name",
//     accessorKey: "playlistName",
//     cell: ({ row, getValue }) => {
//      console.log("Playlist_Name row", row);
//      console.log("Playlist_Name getValue", getValue());
//      console.log("row.originalSubRows", row.originalSubRows);
//      return row.subRows
//       ? row.originalSubRows &&
//          row.originalSubRows.map((item) => (
//           <span
//            {...{
//             onClick: row.getToggleExpandedHandler(),
//             style: { cursor: "pointer" },
//            }}>
//            {`${row.getIsExpanded() ? "▼" : "▶"} ${getValue()}`}
//           </span>
//          ))
//       : null;
//     },
//    },
//    {
//     header: "Track Name",
//     accessorKey: "originalFileName",
//    },
//   ],
//   []
//  );

//  const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
//   getExpandedRowModel: getExpandedRowModel(),
//   getSubRows: (
//    row: AllPlaylistsDataType | PlaylistDataType | TrackDataType
//   ) => {
//    if ("subRows" in row) {
//     return row.subRows as (
//      | AllPlaylistsDataType
//      | PlaylistDataType
//      | TrackDataType
//     )[];
//    }
//    return undefined;
//   },
//  });

//  return (
//   <table style={{ width: "100%", border: "1px solid black" }}>
//    <thead>
//     {table.getHeaderGroups().map((headerGroup) => (
//      <tr key={headerGroup.id}>
//       {headerGroup.headers.map((header) => (
//        <th
//         key={header.id}
//         style={{ padding: "10px", borderBottom: "2px solid black" }}>
//         {flexRender(header.column.columnDef.header, header.getContext())}
//        </th>
//       ))}
//      </tr>
//     ))}
//    </thead>
//    <tbody>
//     {table.getRowModel().rows.map((row) => (
//      <React.Fragment key={row.id}>
//       <tr>
//        {row.getVisibleCells().map((cell) => {
//         // console.log("cell", cell);
//         // console.log("cell.getContext()", cell.getContext());
//         // console.log("row.getVisibleCells()", row.getVisibleCells());
//         return (
//          <td
//           key={cell.id}
//           style={{ padding: "10px", border: "1px solid black" }}>
//           {flexRender(cell.column.columnDef.cell, cell.getContext())}
//          </td>
//         );
//        })}
//       </tr>
//      </React.Fragment>
//     ))}
//    </tbody>
//   </table>
//  );
// };

// =============================================================11111111111111111111111111111111true

// import React, { useMemo } from "react";
// import {
//  useReactTable,
//  getCoreRowModel,
//  getExpandedRowModel,
//  flexRender,
//  ColumnDef,
// } from "@tanstack/react-table";
// import {
//  AllPlaylistsDataType,
//  PlaylistDataType,
//  PlaylistTableTestProps,
//  TrackDataType,
// } from "../redux/types";

// export const PlaylistTableTest = ({ data }: PlaylistTableTestProps) => {
//const [showTrackName, setShowTrackName] = useState(false);
//  const columns = useMemo<
//   ColumnDef<AllPlaylistsDataType | PlaylistDataType | TrackDataType>[]
//  >(
//   () => [
//    {
//     header: "User Name",
//     accessorKey: "userName",
//     cell: ({ getValue }) => getValue(),
//    },
//    {
//     header: "Playlist Name",
//     accessorKey: "playlistName",
//     cell: ({ row, getValue }) =>
//      "playlistName" in row.original ? (
//       <span
//        {...{
//         onClick: row.getToggleExpandedHandler(),
//         style: { cursor: "pointer" },
//        }}>
//        {`${row.getIsExpanded() ? "▼" : "▶"} ${getValue()}`}
//       </span>
//      ) : null,
//    },
//    {
//     header: "Track Name",
//     accessorKey: "originalFileName",
//     isVisible: showTrackName,
//    },
//   ],
//   [showTrackName]
//  );

//  const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
//   getExpandedRowModel: getExpandedRowModel(),
//   getSubRows: (
//    row: AllPlaylistsDataType | PlaylistDataType | TrackDataType
//   ) => {
//    if ("subRows" in row) {
//     return row.subRows;
//    }
//    return undefined;
//   },
//  });

//  return (
//   <table style={{ width: "100%", border: "1px solid black" }}>
//    <thead>
//     {table.getHeaderGroups().map((headerGroup) => (
//      <tr key={headerGroup.id}>
//       {headerGroup.headers.map((header) =>
//        header.column.getIsVisible() ? (
//         <th
//          key={header.id}
//          style={{ padding: "10px", borderBottom: "2px solid black" }}>
//          {flexRender(header.column.columnDef.header, header.getContext())}
//         </th>
//        ) : null
//       )}
//      </tr>
//     ))}
//    </thead>
//    <tbody>
//     {table.getRowModel().rows.map((row) => (
//      <React.Fragment key={row.id}>
//       <tr>
//        {row.getVisibleCells().map((cell) => (
//         <td
//          key={cell.id}
//          style={{ padding: "10px", border: "1px solid black" }}>
//          {flexRender(cell.column.columnDef.cell, cell.getContext())}
//         </td>
//        ))}
//       </tr>
//       {/* Если строка раскрыта, отображаем подстроки (треки) */}
//       {row.getIsExpanded() && row.subRows && (
//        <tr>
//         <td colSpan={row.getVisibleCells().length}>
//          <table style={{ width: "100%", paddingLeft: "20px" }}>
//           <thead>
//            <tr>
//             <th style={{ padding: "5px", borderBottom: "1px solid black" }}>
//              Track Name
//             </th>
//            </tr>
//           </thead>
//           <tbody>
//            {row.subRows.map((subRow) => (
//             <tr key={subRow.id}>
//              <td style={{ padding: "5px", border: "1px solid black" }}>
//               {(subRow as unknown as TrackDataType).originalFileName}
//              </td>
//             </tr>
//            ))}
//           </tbody>
//          </table>
//         </td>
//        </tr>
//       )}
//      </React.Fragment>
//     ))}
//    </tbody>
//   </table>
//  );
// };

//==================================222222222222222222222222222222222222
// import React, { useMemo, useState } from "react";
// import {
//  useReactTable,
//  getCoreRowModel,
//  getExpandedRowModel,
//  flexRender,
//  ColumnDef,
// } from "@tanstack/react-table";
// import {
//  AllPlaylistsDataType,
//  PlaylistDataType,
//  PlaylistTableTestProps,
//  TrackDataType,
// } from "../redux/types";

// export const PlaylistTableTest = ({ data }: PlaylistTableTestProps) => {
//  const [showTrackName, setShowTrackName] = useState(false);

//  const columns = useMemo<
//   ColumnDef<AllPlaylistsDataType | PlaylistDataType | TrackDataType>[]
//  >(
//   () => [
//    {
//     header: "User Name",
//     accessorKey: "userName",
//     cell: ({ getValue }) => getValue(),
//    },
//    {
//     header: "Playlist Name",
//     accessorKey: "playlistName",
//     cell: ({ row, getValue }) =>
//      "playlistName" in row.original ? (
//       <span
//        {...{
//         onClick: () => {
//          row.getToggleExpandedHandler()(); // Исправление вызова
//          setShowTrackName((prev) => !prev); // Изменение состояния
//         },
//         style: { cursor: "pointer" },
//        }}>
//        {`${row.getIsExpanded() ? "▼" : "▶"} ${getValue()}`}
//       </span>
//      ) : null,
//    },
//    {
//     header: "Track Name",
//     accessorKey: "originalFileName",
//     isVisible: showTrackName, // Используем состояние для контроля видимости
//    },
//   ],
//   [showTrackName]
//  );

//  const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
//   getExpandedRowModel: getExpandedRowModel(),
//   getSubRows: (
//    row: AllPlaylistsDataType | PlaylistDataType | TrackDataType
//   ) => {
//    if ("subRows" in row) {
//     return row.subRows;
//    }
//    return undefined;
//   },
//  });

//  return (
//   <>
//    <table style={{ width: "100%", border: "1px solid black" }}>
//     <thead>
//      {table.getHeaderGroups().map((headerGroup) => (
//       <tr key={headerGroup.id}>
//        {headerGroup.headers.map((header) =>
//         header.column.getIsVisible() ? ( // Проверка на видимость колонки
//          <th
//           key={header.id}
//           style={{ padding: "10px", borderBottom: "2px solid black" }}>
//           {flexRender(header.column.columnDef.header, header.getContext())}
//          </th>
//         ) : null
//        )}
//       </tr>
//      ))}
//     </thead>
//     <tbody>
//      {table.getRowModel().rows.map((row) => (
//       <React.Fragment key={row.id}>
//        <tr>
//         {row.getVisibleCells().map((cell) => (
//          <td
//           key={cell.id}
//           style={{ padding: "10px", border: "1px solid black" }}>
//           {flexRender(cell.column.columnDef.cell, cell.getContext())}
//          </td>
//         ))}
//        </tr>
//        {row.getIsExpanded() && row.subRows && showTrackName && (
//         <tr>
//          <td colSpan={row.getVisibleCells().length}>
//           <table style={{ width: "100%", paddingLeft: "20px" }}>
//            <thead>
//             <tr>
//              <th
//               style={{
//                padding: "5px",
//                borderBottom: "1px solid black",
//               }}>
//               Track Name
//              </th>
//             </tr>
//            </thead>
//            <tbody>
//             {row.subRows.map((subRow) => (
//              <tr key={subRow.id}>
//               <td
//                style={{
//                 padding: "5px",
//                 border: "1px solid black",
//                }}>
//                {(subRow as unknown as TrackDataType).originalFileName}
//               </td>
//              </tr>
//             ))}
//            </tbody>
//           </table>
//          </td>
//         </tr>
//        )}
//       </React.Fragment>
//      ))}
//     </tbody>
//    </table>
//   </>
//  );
// };

//================================333333333333333333333333
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
    cell: ({ row, getValue }) => {
     //  console.log("row.original", row.original);
     const playlists = "subRows" in row.original ? row.original.subRows : [];
     console.log("playlists", playlists);
     "playlistName" in playlists
      ? console.log("row.original", row.original)
      : console.log("no playlistName");
     return playlists.map(
      (
       playlist // Отображаем плейлисты
      ) =>
       "playlistName" in playlist ? (
        <div
         key={playlist.playlistId}
         onClick={() => {
          const playlistId = playlist.playlistId;
          setExpandedPlaylistId((prev) =>
           prev === playlistId ? null : playlistId
          );
          row.toggleExpanded(); // развернуть строку
         }}
         style={{ cursor: "pointer", padding: "5px 0" }}>
         {`${expandedPlaylistId === playlist.playlistId ? "▼" : "▶"} ${
          playlist.playlistName
         }`}
        </div>
       ) : null
     );
    },
   },
   {
    header: "Track Name",
    accessorKey: "originalFileName",
    cell: ({ row }) => {
     const playlist = row.original as PlaylistDataType;
     if (expandedPlaylistId === playlist.playlistId) {
      // Отображаем треки только для активного плейлиста
      return (
       <table>
        <tbody>
         {(playlist.subRows || []).map((track: TrackDataType) => (
          <tr key={track.trackId}>
           <td>{track.originalFileName}</td>
          </tr>
         ))}
        </tbody>
       </table>
      );
     }
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
       {headerGroup.headers.map((header) =>
        header.column.getIsVisible() ? (
         <th
          key={header.id}
          style={{ padding: "10px", borderBottom: "2px solid black" }}>
          {flexRender(header.column.columnDef.header, header.getContext())}
         </th>
        ) : null
       )}
      </tr>
     ))}
    </thead>
    <tbody>
     {table.getRowModel().rows.map((row) => (
      <React.Fragment key={row.id}>
       <tr>
        {row.getVisibleCells().map((cell) => (
         <td
          key={cell.id}
          style={{ padding: "10px", border: "1px solid black" }}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
         </td>
        ))}
       </tr>

       {row.getIsExpanded() && expandedPlaylistId && (
        <tr>
         <td colSpan={row.getVisibleCells().length}>
          <table style={{ width: "100%", paddingLeft: "20px" }}>
           <thead>
            <tr>
             <th style={{ padding: "5px", borderBottom: "1px solid black" }}>
              Track Name
             </th>
            </tr>
           </thead>
           <tbody>
            {"subRows" in row.original
             ? ((row.original.subRows as TrackDataType[]) || []).map(
                (track: TrackDataType) => (
                 <tr key={track.trackId}>
                  <td style={{ padding: "5px", border: "1px solid black" }}>
                   {track.originalFileName}
                  </td>
                 </tr>
                )
               )
             : null}
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
