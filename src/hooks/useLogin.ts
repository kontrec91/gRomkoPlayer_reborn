import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";

export const useLogin = () => {
 const navigate = useNavigate();
 const authUser = useSelector((state: RootState) => state.authUser);
 if (authUser.error) {
  return;
 }
 navigate(ROUTES.MY_PLAYLISTS);
};

