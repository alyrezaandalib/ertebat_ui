import "./globals.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
    title: 'سامانه مدیریت مشتریان ارتباط',
    description: 'سامانه مدیریت مشتری ارتباط',
}

export default function RootLayout({children}) {

    return (
        <html lang="fa" dir={"rtl"} data-theme="ertebat">
        <body className={"max-w-[2000px] mx-auto"}>
        <ToastContainer
            position={"bottom-left"}
            rtl={true}
            className={"text-xs"}
        />

        {children}
        </body>
        </html>
    );
}
