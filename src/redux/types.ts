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
 trackId: string;
 url: string;
 originalFileName: string;
}

export interface PlaylistDataType {
 playlistName: string;
 playlistId: string;
 subRows: TrackDataType[];
}

export interface AllPlaylistsDataType {
 userName: string;
 userId: string;
 subRows: PlaylistDataType[];
}

// Типизация пропсов для компонента PlaylistTableTest
export interface PlaylistTableTestProps {
 data: AllPlaylistsDataType[];
}
