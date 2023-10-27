import NavbarWithNoSSR from "@/components/commons/NavBar/NavBarNoSSR";
import Footer from "@/components/commons/Footer";

export const metadata = {
    title: 'تماس با ما | ارتباط',
    description: 'سامانه یکپارچه ابری CRM ارتباط یک سیستم مدیریت ارتباط با مشتریان است و قابلیت مدیریت کار و وظایف و همچنین ارسال پیامک گروهی به مشتریان را داراست.',
}

export default function RootLayout({children}) {
    return (
        <>
            <NavbarWithNoSSR/>
            <main className={"px-10 py-5 w-full"}>
                {children}
            </main>
            <Footer/>
        </>
    )
}
