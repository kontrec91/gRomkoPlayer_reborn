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

// export interface InitialStateType {
//  data: AllPlaylistsDataType[];
//  users: usersType[];
// }
export interface usersType {
 userId: null | number;
 userName: null | string;
 userEmail: null | string;
 userPassword: null | string;
}

// Типизация пропсов для компонента PlaylistTableTest
export interface PlaylistTableTestProps {
 data: AllPlaylistsDataType[];
}

// CREATE TABLE users (
//     user_id SERIAL PRIMARY KEY,
//     user_name VARCHAR(255) NOT NULL,
// )

// CREATE TABLE playlists (
//     playlist_name VARCHAR(255) NOT NULL,
//     playlist_id SERIAL PRIMARY KEY
// );

// CREATE TABLE tracks (
//     track_id SERIAL PRIMARY KEY,
//     original_file_name VARCHAR(255) NOT NULL,
//     url VARCHAR(255) NOT NULL
// );

// CREATE TABLE track_playlist (// many to many
//     track_id INT REFERENCES tracks(track_id) ON DELETE CASCADE,
//     playlist_id INT REFERENCES playlists(playlist_id) ON DELETE CASCAD,
//     CONSTRAINT playlist_track_pkey PRIMARY KEY (playlist_id, track_id)  -- composite key
// );
