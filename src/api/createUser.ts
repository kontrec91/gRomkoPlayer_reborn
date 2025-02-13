import { api } from "../utils/api";
import * as endpoints from "../constants/endpoints";
import { jwtDecode } from "jwt-decode";
import { tokenManager } from "../utils/tokenManager";

export const userRegistration = async (
 login: string,
 email: string,
 password: string
) => {
 try {
  const res = await api.post(endpoints.CREATE_USER, {
   user_name: login,
   user_email: email,
   user_password: password,
  });
  const token = res.data.accessToken;
  tokenManager.setRefreshToken(token);
  const decoded = jwtDecode(token);
  return { ...decoded, accessToken: res.data.accessToken };
 } catch (error: any) {
  throw new Error(error.response.data.message);
 }
};
