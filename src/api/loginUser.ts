import { api } from "../utils/api";

import * as endpoints from "../constants/endpoints";
import { jwtDecode } from "jwt-decode";
import { tokenManager } from "../utils/tokenManager";

export const userLogin = async (email: string, password: string) => {
 console.log(email, password);

 try {
  const res = await api.post(endpoints.LOGIN_USER, {
   user_email: email,
   user_password: password,
  });

  console.log("RES", res.data);

  ///need to create some utils for this
  const token = res.data.accessToken;
  //   localStorage.setItem("authToken", token);
  tokenManager.setAuthToken(token);
  const decoded = jwtDecode(token);
  console.log("decoded", decoded);
  //   return res.data;
  return decoded;
 } catch (error: any) {
  throw new Error(error.response.data.message);
 }
};
