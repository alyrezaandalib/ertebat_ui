"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import NavLink from "@/components/Link";
import Link from "next/link";
import {FaInstagram, FaTelegramPlane, FaWhatsapp} from "react-icons/fa";

const pages = [
    {label: "صفحه اصلی", href: "/", id: "0"},
    {label: "آموزش", href: "/education", id: "1"},
    {label: "تعرفه", href: "/plans", id: "2"},
    {label: "تماس با ما", href: "/contact-us", id: "4"},
];
const morInfo = [
    {label: "صفحه اصلی", href: "/", id: "0"},
    {label: "آموزش", href: "/education", id: "1"},
    {label: "تعرفه", href: "/plans", id: "2"},
    {label: "تماس با ما", href: "/contact-us", id: "4"},
];
export default function Footer() {
    return (
        <footer className={"w-full flex flex-col justify-between items-center"}>
            <div className={"hidden md:flex w-full h-auto pt-8 pb-12 bg-secondary text-white/90 rounded-t-lg"}>
                <div className={"flex pr-12 pl-12 w-full flex-col text-center md:flex-row"}>
                    <div className={"flex items-start flex-row flex-1 justify-start py-2"}>
                        <ul className={"text-xs text-right leading-7 ml-20"}>
                            <h4 className={"footer-title"}>بخش های سایت</h4>
                            {pages.map(item => (
                                <li key={item.id}>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className={"text-xs text-right leading-7"}>
                            <h4 className={"footer-title"}>اطلاعات بیشتر</h4>
                            {morInfo.map(item => (
                                <li key={item.id}>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={"flex items-center flex-col flex-1 py-2"}>
                        <h4 className={"footer-title"}>ارتباط در شبکه های اجتماعی</h4>
                        <div className={"flex items-center mt-6 text-xl"}>
                            <Link href={"/"}>
                                <FaTelegramPlane className={" mx-3"}/>
                            </Link>
                            <Link href={"/"}>
                                <FaWhatsapp className={"mx-3"}/>
                            </Link>
                            <Link href={"/"}>
                                <FaInstagram className={"mx-3"}/>
                            </Link>
                        </div>
                    </div>
                    <div className={"flex items-center flex-col flex-1 py-4"}>
                        <h4 className={"footer-title"}>نمادهای الکترونیک</h4>
                    </div>
                </div>
            </div>
            <div className={"text-xs w-full text-white/90 bg-primary text-center py-3 px-2 leading-7"}>
                <p>کلیه حقوق محفوظ و متعلق به شرکت مهندسی ابر گستر رادین می باشد.</p>
            </div>
        </footer>
    );
}
