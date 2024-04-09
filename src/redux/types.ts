import { Table, Row, Column, Cell } from "@tanstack/react-table";

export type TrackDataType = {
 id: number;
 url: string;
 originalFileName: string;
};

export type PlaylistDataType = {
 playlistName: string;
 playlistData: TrackDataType[];
};

export type AllPlaylistsDataType = {
 userName: string;
 playlistsData: PlaylistDataType[];
};

export type AllUsersPlaylistsType = AllPlaylistsDataType[];

export type propsType = {
 table: Table<AllUsersPlaylistsType>;
 row: Row<AllUsersPlaylistsType>;
 column: Column<AllUsersPlaylistsType>;
 cell: Cell<AllUsersPlaylistsType, string | number | []>; //need to check it
 getValue: () => any;
 renderValue: () => any;
};

// [
//  {
//   userName: "user1",
//   playlistsData: [
//    {
//     playlistName: "playlist1",
//     playlistData: [
//      {
//       id: 1,
//       url: "url",
//       originalFileName: "track1",
//      },
//      {
//       id: 2,
//       url: "url",
//       originalFileName: "track2",
//      },
//      {
//       id: 3,
//       url: "url",
//       originalFileName: "track3",
//      },
//     ],
//    },
//    {
//     playlistName: "playlist2",
//     playlistData: [
//      {
//       id: 1,
//       url: "url",
//       originalFileName: "track1",
//      },
//      {
//       id: 2,
//       url: "url",
//       originalFileName: "track2",
//      },
//     ],
//    },
//   ],
//  },
// ];
