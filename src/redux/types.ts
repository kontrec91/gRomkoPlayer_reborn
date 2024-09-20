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
