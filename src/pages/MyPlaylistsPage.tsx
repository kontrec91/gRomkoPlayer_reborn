import React, { useEffect } from "react";
import background from "../images/girl.jpg";
import { Wrapper } from "../components/Wrapper";
import { NavigationBar } from "../components/NavigationBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getAllPlaylists } from "../redux/sagas/sagas";
import {
 createColumnHelper,
 flexRender,
 getCoreRowModel,
 useReactTable,
} from "@tanstack/react-table";
import { AllUsersPlaylistsType, propsType } from "../redux/types";

export const MyPlaylistsPage = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getAllPlaylists()); // Вызов dispatch с экшеном
 }, [dispatch]); // Зависимость добавлена для избежания бесконечного цикла вызовов

 const data = useSelector(
  (state: RootState) => state.allPlaylists
 ) as AllUsersPlaylistsType[];

 const columnHelper = createColumnHelper<AllUsersPlaylistsType>();

 const columns = [
  columnHelper.accessor("userName", {
   header: "User",
   cell: (props) => props.getValue(),
  }),

  columnHelper.accessor("playlistsData", {
   header: "Playlists",
   cell: (props: propsType) =>
    props.getValue().map((item: { playlistName: string }) => item.playlistName),
  }),

  columnHelper.accessor("playlistsData", {
   header: "Tracks",
   cell: (props: propsType) =>
    props
     .getValue()
     .flatMap((item: { playlistData: { originalFileName: string }[] }) =>
      item.playlistData.map((track) => track.originalFileName)
     ),
  }),
 ];

 const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
 });

 return (
  <Wrapper background={background}>
   <NavigationBar />
   <h1>This is my playlists page</h1>
   <table>
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
     {table.getRowModel().rows.map((row) => {
      //   console.log(row.getVisibleCells());
      return (
       <tr key={row.id}>
        {row.getVisibleCells().map((cell) => {
         //  console.log("cell", cell.column.columnDef.cell);
         console.log("cell", cell.getValue());
         return (
          <td key={cell.id}>
           {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
         );
        })}
       </tr>
      );
     })}
    </tbody>
   </table>
  </Wrapper>
 );
};
