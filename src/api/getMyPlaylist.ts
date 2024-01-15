import { api } from "../utils/api";

export const getMyPlaylist = () => {
 api.get("/track.json").then((res) => res.data);
};
