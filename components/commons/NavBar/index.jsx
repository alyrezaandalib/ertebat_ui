"use client";
import Image from "next/image";
import ertebatLogo from "../../../public/Ertebat logo final 1.svg";
import NavLink from "@/components/Link";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { usePathname } from "next/navigation";
import DrawerWithNavigation from "@/components/commons/NavBar/SideNavBar";
import { Button } from "@material-tailwind/react";

export default function NavBar() {
  const pathName = usePathname();

  const headerItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "مقالات", href: "/blog" },
    { label: "تعرفه", href: "/plans" },
    { label: "تماس با ما", href: "/contact-us" },
  ];

  return (
    <header className={"w-full navbar text-sm bg-none z-20"}>
      <div
        className={
          "hidden lg:flex flex-row justify-between items-center w-full py-3 px-14"
        }
      >
        <div className={"flex items-center"}>
          <Link
            href={"/"}
            className={"normal-case ltr:ml-4 ltr:mr-10 rtl:ml-8 rtl:mr-4"}
          >
            <Image src={ertebatLogo} alt={"ertebat logo"} className={"w-28"} />
          </Link>
          <ul className={"tabs "}>
            {headerItems.map((item, index) => {
              return (
                <li className={""} key={index}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={pathName === item.href}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <Link href={"login"}>
          <Button
            size={"sm"}
            className={"flex items-center bg-secondary text-xs"}
          >
            <span className={"ml-2 text-lg"}>
              <BsBoxArrowInLeft />
            </span>
            ورود | ثبت نام
          </Button>
        </Link>
      </div>
      <div
        className={
          "flex lg:hidden justify-between items-center w-full py-2 px-5 sm:px-8"
        }
      >
        <Image src={ertebatLogo} alt={"ertebat logo"} className={"w-[150px]"} />
        <DrawerWithNavigation />
      </div>
    </header>
  );
}
