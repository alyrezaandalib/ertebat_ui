import GoToTop from "@/components/commons/GoTopButton";
import MainPage from '@/components/MainPage/MainPage'
import NavbarWithNoSSR from "@/components/commons/NavBar/NavBarNoSSR";
import Footer from "@/components/commons/Footer";

export default function Home() {
    return (
        <>
            <NavbarWithNoSSR/>
            <GoToTop/>
            <MainPage/>
            <Footer/>
        </>
    );
}
