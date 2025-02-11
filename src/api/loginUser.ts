import { api } from "../utils/api";

import * as endpoints from "../constants/endpoints";
import { jwtDecode } from "jwt-decode";
import { tokenManager } from "../utils/tokenManager";

export const userLogin = async (email: string, password: string) => {
 try {
  const res = await api.post(endpoints.LOGIN_USER, {
   user_email: email,
   user_password: password,
  });

  const token = res.data.accessToken;
  tokenManager.setAuthToken(token);
  const decoded = jwtDecode(token);
  return decoded;
 } catch (error: any) {
  throw new Error(error.response.data.message);
 }
};
