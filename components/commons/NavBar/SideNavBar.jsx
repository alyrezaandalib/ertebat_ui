import React from "react";
import SideNavBarContent from "./SideNavBarContent";
import { Drawer, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import menuIcon from "@/public/menu 1.svg";
import ertebatLogo from "../../../public/Ertebat logo final 1.svg";

export default function DrawerWithNavigation() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <button onClick={openDrawerRight} className="font-bold text-xl">
          <Image src={menuIcon} alt={""} className={"w-[30px]"} />
        </button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="rounded-l-lg"
      >
        <div className="mb-6 flex flex-col items-center justify-between rounded-lg py-4">
          <div className="flex w-full justify-between items-center p-1 mb-3">
            <div>
              <Image
                src={ertebatLogo}
                alt={"ertebatLogo"}
                className={"w-full"}
              />
            </div>
            <Button
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
              className={"p-2"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <SideNavBarContent closeDrawerRight={closeDrawerRight} />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
