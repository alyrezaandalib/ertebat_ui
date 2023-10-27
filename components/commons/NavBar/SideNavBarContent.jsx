"use client";
import React from "react";
import { BiHome } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuContact2 } from "react-icons/lu";
import NavLinkM from "@/components/Link/LinkM";
import { usePathname } from "next/navigation";

import { Button, Card, List } from "@material-tailwind/react";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";

const headerItems = [
  { label: "صفحه اصلی", href: "/", icon: <BiHome /> },
  { label: "مقالات", href: "/blog", icon: <MdCastForEducation /> },
  { label: "تعرفه", href: "/plans", icon: <IoPricetagsOutline /> },
  { label: "تماس با ما", href: "/contact-us", icon: <LuContact2 /> },
];

export default function SideNavBarContent({ closeDrawerRight }) {
  const [open, setOpen] = React.useState(0);
  const pathName = usePathname();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full py-0 my-0 overflow-y-auto">
      <List className={"mt-5"}>
        {headerItems.map((item, index) => {
          return (
            <li key={index} onClick={closeDrawerRight} className={"list-none w-full my-1 text-xl text-center mx-auto"}>
              <NavLinkM
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={pathName === item.href}
              />
            </li>
          );
        })}
        <div className={"fixed bottom-5 right-16"}>
          <Link href={"login"}>
            <Button className={"flex justify-center items-center bg-secondary text-sm"}>
              <span className={"ml-2 text-lg"}>
                <BsBoxArrowInLeft />
              </span>
              ورود | ثبت نام
            </Button>
          </Link>
        </div>
      </List>
    </Card>
  );
}
