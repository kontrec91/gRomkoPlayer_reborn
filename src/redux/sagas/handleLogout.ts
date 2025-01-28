import { tokenManager } from "../../utils/tokenManager";

export function* handleLogout() {
 yield tokenManager.removeAuthToken();
}
