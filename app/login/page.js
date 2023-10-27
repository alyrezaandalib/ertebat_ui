"use client";
import { useState } from "react";
import GetOTP from "@/components/login/GetOTP";
import GetPhoneNumber from "@/components/login/GetPhoneNumber";

export default function App() {
  const [userState, setUserState] = useState({
    phoneNumber: "",
    statusCode: "",
    remainingTime: "",
    hasAccount: "",
    token: "",
    sessionToken: "",
  });

  const { phoneNumber, statusCode } = userState;

  return (
    <div className="flex justify-center items-center h-screen w-full mx-auto max-w-[1300px]">
      {phoneNumber && statusCode === 200 ? (
        <GetOTP setUserState={setUserState} userState={userState} />
      ) : (
        <GetPhoneNumber setUserState={setUserState} userState={userState} />
      )}
    </div>
  );
}
