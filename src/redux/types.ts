// export type TrackDataType = {
//  id: number;
//  url: string;
//  originalFileName: string;
// };

// export type PlaylistDataType = {
//  playlistName: string;
//  subRows: TrackDataType[];
// };

// export type AllPlaylistsDataType = {
//  userName: string;
//  subRows: PlaylistDataType[];
// };

export interface TrackDataType {
 id: number;
 url: string;
 originalFileName: string;
}

export interface PlaylistDataType {
 playlistName: string;
 subRows: TrackDataType[];
}

export interface AllPlaylistsDataType {
 userName: string;
 subRows: PlaylistDataType[];
}
