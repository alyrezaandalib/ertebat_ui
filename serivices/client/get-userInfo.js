import http from "@/serivices/http";

export const getUserInfo = (TOKEN) => {
  return http.get("https://",  { headers: { Authorization: TOKEN } });
};
