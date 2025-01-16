import { api } from "../utils/api";

import * as endpoints from "../constants/endpoints";
import { jwtDecode } from "jwt-decode";

export const userLogin = async (email: string, password: string) => {
 try {
  const res = await api.post(endpoints.LOGIN_USER, {
   user_email: email,
   user_password: password,
  });

  ///need to create some utils for this
  const token = res.data.token;
  localStorage.setItem("authToken", token);
  const decoded = jwtDecode(token);
  console.log("decoded", decoded);
  //   return res.data;
  return decoded;
 } catch (error: any) {
  throw new Error(error.response.data.message);
 }
};
