import http from "@/serivices/http";

export const checkPhoneNumber = (phoneNumber) => {
  const body = {
    phone_number: phoneNumber,
  };

  return http.post("https://", body);
};
