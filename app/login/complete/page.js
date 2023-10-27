"use client";

import GetUserInformation from "@/components/login/GetUserInformation";

export default function Home() {
    return (

            <div className="flex justify-center items-center h-screen w-screen mx-auto max-w-[1300px]">
                <GetUserInformation/>
            </div>
    );
}
