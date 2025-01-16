import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";

export const useLogin = () => {
 const navigate = useNavigate();
 //  const authUser = useSelector((state: RootState) => state.rootReducer.authUser);
 const authUser = useSelector((state: RootState) => state.authUser);

 if (authUser.error && !authUser.hasOwnProperty("userId")) {
  return;
 }
 navigate(ROUTES.MY_PLAYLISTS);
};
