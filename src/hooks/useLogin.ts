import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";

export const useLogin = () => {
 //need to refactor code to combine registration, login and logout operations
 const navigate = useNavigate();
 const authUser = useSelector((state: RootState) => state.authUser);

 if (authUser.error && !authUser.hasOwnProperty("userId")) {
  return;
 }
 navigate(ROUTES.MY_PLAYLISTS);
};
