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

export interface usersType {
 userId: null | number;
 userName: null | string;
 userEmail: null | string;
 userPassword: null | string;
}

export interface usersAuthState {
 user: usersType | {};
 error: string | null;
 status: string;
}

// Типизация пропсов для компонента PlaylistTableTest
export interface PlaylistTableTestProps {
 data: AllPlaylistsDataType[];
}
