import {AiOutlineClose} from "react-icons/ai"
import * as React from "react";
import NavbarWithNoSSR from "@/components/commons/NavBar/NavBarNoSSR";
import Footer from "@/components/commons/Footer";

export const metadata = {
    title: 'تعرفه ها و قیمت | ارتباط',
    description: 'سامانه یکپارچه ابری CRM ارتباط یک سیستم مدیریت ارتباط با مشتریان است و قابلیت مدیریت کار و وظایف و همچنین ارسال پیامک گروهی به مشتریان را داراست.',
}

export default function RootLayout({children}) {
    return (
        <main>
            <NavbarWithNoSSR/>
            {children}
            <Footer/>
        </main>
    )
}

