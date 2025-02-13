export const tokenManager = {
 getRefreshToken: () => localStorage.getItem("refreshToken"),
 setRefreshToken: (token: string) =>
  localStorage.setItem("refreshToken", token),
 removeRefreshToken: () => localStorage.removeItem("refreshToken"),
};
