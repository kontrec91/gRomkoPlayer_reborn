import { tokenManager } from "../../utils/tokenManager";

export function* handleLogout() {
 // try{}catch(error){

 // }
 console.log("logout");
 yield tokenManager.removeAuthToken();
}
