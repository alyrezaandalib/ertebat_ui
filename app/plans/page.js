'use client'
import GoToTop from "@/components/commons/GoTopButton";
const BasePlanWithNoSSR = dynamic(() => import("@/components/Plans/page"), {
    ssr: false
})
import dynamic from "next/dynamic";
export default function App() {
    return (
        <>
            <GoToTop />
            <BasePlanWithNoSSR />
        </>
    )
}
