import { api } from "../utils/api";
import * as endpoints from "../constants/endpoints";

export const logoutUser = async (token: string) => {
 try {
  await api.delete(endpoints.LOGOUT_USER, {
   data: { token },
  });

  return;
 } catch (error: any) {
  throw new Error(error.response.data.message);
 }
};
