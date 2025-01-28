export const tokenManager = {
 getAuthToken: () => localStorage.getItem("authToken"),
 setAuthToken: (token: string) => localStorage.setItem("authToken", token),
 removeAuthToken: () => localStorage.removeItem("authToken"),
};
